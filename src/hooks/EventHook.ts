export interface EventHook<T = void> {
  /** 事件名称（可选） */
  name: string

  /** 注册事件监听函数, 返回取消监听的函数，用于移除该监听 */
  on: (fn: (payload: T) => void) => () => void
  /** 注册一次性监听函数，事件触发后自动移除监听函数 */
  once: (fn: (payload: T) => void) => void
  /** 移除指定的事件监听函数 */
  off: (fn: (payload: T) => void) => void
  /** 触发事件，通知所有监听函数 */
  trigger: (payload: T) => void
  /** 清除所有事件监听函数 */
  clear: () => void
}

/**
 * 创建一个可订阅/触发的事件 Hook
 * 使用 Set 存储监听器，避免重复注册相同函数
 * @param name 事件名称（可选）
 *
 * @example
 * // 创建事件
 * const hook = createEventHook<string>('MyEvent')
 * // 注册监听
 * const off = hook.on(msg => console.log(msg))
 * // 注册一次性监听
 * const offOnce = hook.once(msg => console.log('once', msg))
 * // 触发事件
 * hook.trigger('hello')
 * // 移除监听
 * off()
 * offOnce()
 * // 清空所有监听
 * hook.clear()
 */
export function createEventHook<T = Record<string, any>>(name: string): EventHook<T> {
  // 使用 Set 避免重复添加同一监听器
  const listeners = new Set<(payload: T) => void>()

  const on = (fn: (payload: T) => void) => {
    listeners.add(fn)
    return () => listeners.delete(fn) // 返回取消监听函数
  }

  const once = (fn: (payload: T) => void) => {
    const wrapped = (payload: T) => {
      fn(payload)
      listeners.delete(wrapped) // 触发后自动移除自身
    }
    listeners.add(wrapped)
    // 返回取消监听函数，便于外部主动移除
    return () => listeners.delete(wrapped)
  }

  const off = (fn: (payload: T) => void) => {
    listeners.delete(fn)
  }

  const trigger = (payload: T) => {
    [...listeners].forEach(fn => fn(payload))
  }

  const clear = () => {
    listeners.clear()
  }

  return { name, on, off, once, trigger, clear }
}

type WithNext<F> =
  F extends (...args: infer A) => infer R
    ? (...args: [...A, next: () => R]) => R
    : never

export type EventHookEnhancers<T = any> = {
  [K in keyof EventHook<T>]?: WithNext<EventHook<T>[K]>
}

/**
 * 包装事件 Hook 的所有方法（支持增强器）
 *
 * 增强器（enhancers）可拦截事件方法调用：
 * - 若增强器调用 next()，则执行原始方法
 * - 若增强器未调用 next()，则原始方法不会被执行
 * - 可用于埋点、日志、权限等横切逻辑
 *
 * @example
 * const hook = eventWrapper('Test', {
 *   trigger(payload, next) {
 *     console.log('before trigger', payload)
 *     next()
 *   },
 * })
 */
export function eventWrapper<T>(name: string, enhancers: EventHookEnhancers<T>): EventHook<T> {
  const hook = createEventHook<T>(name)

  const wrap = <K extends keyof EventHookEnhancers<T>>(key: K, defaultFn: (...args: any[]) => any) => {
    return (...args: any[]) => {
      const enhancer = enhancers[key]
      let called = false
      const next = () => {
        called = true
        return defaultFn(...args)
      }
      const result = enhancer?.(...args, next)
      return called || !enhancer ? defaultFn(...args) : result
    }
  }

  return {
    name: hook.name,
    on: wrap('on', hook.on),
    once: wrap('once', hook.once),
    off: wrap('off', hook.off),
    clear: wrap('clear', hook.clear),
    trigger: wrap('trigger', hook.trigger),
  }
}
