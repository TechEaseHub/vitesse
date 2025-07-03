/**
 * 通用事件 Hook 工具类型定义
 * 支持多个订阅者、可取消订阅、一次性订阅、触发、清空等能力
 */
export interface EventHook<T = void> {
  /** 事件名称（可选） */
  name?: string

  /**
   * 添加事件监听函数
   * @param fn 监听回调，接收事件参数
   * @returns 取消订阅函数，用于移除该监听
   */
  on: (fn: (payload: T) => void) => () => void

  /**
   * 取消某个监听函数
   * @param fn 要取消的监听函数
   */
  off: (fn: (payload: T) => void) => void

  /**
   * 仅监听一次，事件触发后自动移除监听器
   * @param fn 监听函数
   */
  once: (fn: (payload: T) => void) => void

  /**
   * 触发事件，调用所有监听器
   * @param payload 事件参数
   */
  trigger: (payload: T) => void

  /**
   * 清除所有监听器
   */
  clear: () => void
}

/**
 * 创建一个可订阅/触发的事件 Hook
 * @param name 事件名称（可选，用于埋点等场景）
 * @returns 事件控制对象，包含 on/off/trigger/once/clear 方法
 */
export function createEventHook<T = void>(name?: string): EventHook<T> {
  // 使用 Set 存储监听函数，避免重复
  const fns = new Set<(payload: T) => void>()

  return {
    name,

    on(fn) {
      fns.add(fn)
      // 返回取消监听函数
      return () => fns.delete(fn)
    },

    off(fn) {
      fns.delete(fn)
    },

    once(fn) {
      const wrapped = (payload: T) => {
        fn(payload)
        fns.delete(wrapped) // 触发一次后移除
      }
      fns.add(wrapped)
    },

    trigger(payload: T) {
      fns.forEach(fn => fn(payload))
    },

    clear() {
      fns.clear()
    },
  }
}

/**
 * 发送埋点事件
 * @param event 埋点事件名
 * @param payload 事件数据
 */
export function sendTrackEvent(event: string, payload?: any) {
  const time = new Date().toLocaleString()
  const header = `%c[埋点] ${event} %c@ ${time}`
  const styleEvent = 'color: #4caf50; font-weight: bold;'
  const styleTime = 'color: #999; font-size: 0.85em;'

  if (payload !== undefined) {
    console.groupCollapsed(header, styleEvent, styleTime)
    console.log(payload)
    console.groupEnd()
  }
  else {
    console.log(header, styleEvent, styleTime)
  }
}

/**
 * 给指定事件 hook 添加埋点逻辑（增强 trigger）
 * @param hook 事件 Hook 实例
 * @returns 包装后的事件 Hook，触发时自动发送埋点
 */
export function withTracking<T>(hook: EventHook<T>): EventHook<T> {
  return {
    ...hook,
    trigger(payload: T) {
      sendTrackEvent(hook.name ?? 'unknown_event', payload)
      hook.trigger(payload)
    },
  }
}
