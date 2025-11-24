import type { Router } from 'vue-router'

export function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log('路由守卫【beforeEach】', {
      toPath: to.path,
      redirectedFrom: !!to.redirectedFrom,
      to,
      from,
    })

    const allowRoles = to.meta?.roles
    const userRoles = ['manager'] // TODO: 可替换为实际登录角色

    if (!allowRoles || allowRoles.length === 0) {
      return next()
    }

    const hasAccess = allowRoles.some(role => userRoles.includes(role))

    if (hasAccess) {
      next()
    }
    else {
      next('/public/403') // 确保有该页面
    }
  })
}
