import { eventWrapper } from './EventHook'

export function TrackedEvent<T = Record<string, any>>(name: string) {
  return eventWrapper<T>(name, {
    trigger(payload, next) {
      trackLog({ name, payload })
      next()
    },
  })
}

export function trackLog(opt: { name: string, payload?: unknown }) {
  const { name, payload } = opt
  const time = new Date().toLocaleString()
  const styleEvent = 'color: #4caf50; font-weight: bold;'
  const styleTimes = 'color: #999999; font-size: 0.85em;'
  const header = `%c[埋点] ${name} %c@ ${time}`

  if (payload !== undefined) {
    console.groupCollapsed(header, styleEvent, styleTimes)
    console.log(payload)
    console.groupEnd()
  }
  else {
    console.log(header, styleEvent, styleTimes)
  }
}
