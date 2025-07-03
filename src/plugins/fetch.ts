// src/plugins/fetch.ts
import { fetchEvents } from '~/composables/eventHooks'

function getToken() {
  return localStorage.getItem('token') || 'abc123token'
}

export function setupFetchHooks() {
  fetchEvents.onBefore.on((ctx) => {
    const token = getToken()
    ctx.options = {
      ...ctx.options,
      headers: {
        ...ctx.options?.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    }
  })
}
