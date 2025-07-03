// composables/eventHooks.ts
import { createEventHook, withTracking } from '../hooks/createEventHook'

/** 全局错误提示 */
export const onGlobalError = withTracking(createEventHook<Record<string, any>>('GlobalError'))

/** 网络 */
export const fetchEvents = {
  /** 请求之前 */
  onBefore: withTracking(createEventHook<Record<string, any>>('FetchBefore')),
  /** 请求之后 */
  onAfter: createEventHook<Record<string, any>>('FetchAfter'),
  /** 请求错误 */
  onError: createEventHook<Record<string, any>>('FetchError'),
}

/** 授权 */
// 用于管理认证相关事件的集合
export const authEvents = {
  // 登录事件，携带用户ID信息
  onLogin: createEventHook<{ userId: string }>('AuthLogin'),
  // 登出事件，不携带任何信息
  onLogout: createEventHook<void>('AuthLogout'),
  // 认证失效事件，不携带任何信息
  onAuthInvalid: createEventHook<void>('AuthInvalid'),
  // 权限拒绝事件，携带资源信息
  onPermissionDenied: createEventHook<{ resource: string }>('AuthPermissionDenied'),
}
