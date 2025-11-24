import { TrackedEvent } from '~/hooks/EventWrapper'
import { createEventHook } from '../hooks/EventHook'

/** 全局错误提示 */
export const onGlobalError = createEventHook<Record<string, any>>('GlobalError')

/** 网络 */
export const fetchEvents = {
  /** 请求之前 */
  onBefore: TrackedEvent('FetchBefore'),
  /** 请求之后 */
  onAfter: createEventHook('FetchAfter'),
  /** 请求错误 */
  onError: createEventHook('FetchError'),
}
