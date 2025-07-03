import type { App } from 'vue'
import { setupFetchHooks } from './fetch'

export default function setupPlugins(_app: App) {
  setupFetchHooks()

  // 其他插件注册
}
