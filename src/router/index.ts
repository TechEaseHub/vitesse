import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const LayoutRoutes = setupLayouts(routes)
console.log('【LayoutRoutes】', LayoutRoutes)

const router = createRouter({
  routes: LayoutRoutes,
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_BASE || '/'),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash)
      return { el: to.hash }
    return { top: 0 }
  },

})

export default router
