import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

declare module 'vue-router' {
  interface RouteMeta {
    /** 使用布局 */
    layout?: string
    /** 标题 */
    title: string
    /** 图标 */
    icon?: string
    /** 父级路径 */
    menuParent?: RouteMap[keyof RouteMap]['path']
    /** 菜单排序 */
    order?: number
    /** 在菜单中隐藏 */
    hideInMenu?: boolean
    /** 角色权限 */
    roles?: string[]
  }
}

const layoutsRoutes = setupLayouts(routes)

const router = createRouter({
  routes: layoutsRoutes,
  history: createWebHashHistory(import.meta.env.VITE_APP_PUBLIC_BASE || '/'),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash)
      return { el: to.hash }
    return { top: 0 }
  },
})

// 热更新
if (import.meta.hot) {
  const url = new URL(location.href)
  const isReloaded = url.searchParams.has('__reload')

  if (!isReloaded) {
    handleHotUpdate(router)
    url.searchParams.set('__reload', '1')
    location.href = url.toString()
  }
}

export default router
