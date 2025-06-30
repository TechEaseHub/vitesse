import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHashHistory(import.meta.env.VITE_APP_PUBLIC_BASE || '/'),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash)
      return { el: to.hash }
    return { top: 0 }
  },

})

export default router
