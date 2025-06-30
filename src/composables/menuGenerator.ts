import type { RouteRecordNormalized } from 'vue-router'

export interface MenuItem {
  title: string
  path: string
  icon?: string
  children?: MenuItem[]
  order?: number // 新增排序字段
}

/**
 * 将路由记录转换为嵌套菜单结构
 * 改进点：
 * 1. 处理布局路由的特殊结构
 * 2. 支持路径规范化
 * 3. 增强错误处理
 * 4. 支持 order 字段排序
 */
export function generateMenus(routes: RouteRecordNormalized[]): MenuItem[] {
  const menuMap = new Map<string, MenuItem>()
  const rootMenus: MenuItem[] = []

  // 第一步：创建所有菜单项的映射
  routes.forEach((route) => {
    // 跳过隐藏菜单项和没有标题的路由
    if (route.meta?.hideInMenu || !route.meta?.title)
      return

    const fullPath = normalizePath(route.path)
    const order = typeof route.meta?.order === 'number' ? route.meta.order : 0

    // 处理布局路由的特殊情况（vite-plugin-vue-layouts）
    const isLayoutRoute = route.path.includes('@layouts')
      || route.name?.toString().includes('layout-wrapper')

    if (isLayoutRoute) {
      // 布局路由：只处理其子路由
      if (route.children && route.children.length > 0) {
        route.children.forEach((child) => {
          if (child.meta?.hideInMenu || !child.meta?.title)
            return

          const childPath = normalizePath(child.path)
          const childOrder = typeof child.meta?.order === 'number' ? child.meta.order : 0
          menuMap.set(childPath, {
            title: child.meta.title as string,
            path: childPath,
            icon: child.meta.icon as string | undefined,
            order: childOrder,
          })
        })
      }
      return
    }

    // 常规路由
    menuMap.set(fullPath, {
      title: route.meta.title as string,
      path: fullPath,
      icon: route.meta.icon as string | undefined,
      order,
    })
  })

  // 第二步：构建嵌套结构
  routes.forEach((route) => {
    if (!route.meta?.title || route.meta.hideInMenu)
      return

    const fullPath = normalizePath(route.path)
    const menuItem = menuMap.get(fullPath)
    if (!menuItem)
      return

    // 处理父路由关系
    if (route.meta.parentPath) {
      const parentPath = normalizePath(route.meta.parentPath as string)
      const parent = menuMap.get(parentPath)

      if (parent) {
        parent.children = parent.children || []
        parent.children.push(menuItem)
      }
      else {
        // 父路由不存在，作为根菜单
        rootMenus.push(menuItem)
      }
    }
    else {
      // 没有父路由，作为根菜单
      rootMenus.push(menuItem)
    }
  })

  // 排序函数
  function sortMenus(menus: MenuItem[]): MenuItem[] {
    return menus
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((menu) => {
        if (menu.children)
          menu.children = sortMenus(menu.children)
        return menu
      })
  }

  // 第三步：提升只有一个子菜单的父分组
  function flattenSingleChildMenus(menus: MenuItem[]): MenuItem[] {
    return menus.flatMap((menu) => {
      if (menu.children && menu.children.length === 1) {
        // 保留父菜单的icon，如果父菜单有icon但子菜单没有，则继承
        const child = menu.children[0]
        if (menu.icon && !child.icon)
          child.icon = menu.icon
        return flattenSingleChildMenus([child])
      }
      if (menu.children)
        menu.children = flattenSingleChildMenus(menu.children)
      return [menu]
    })
  }

  // 先排序再扁平化
  return flattenSingleChildMenus(sortMenus(rootMenus))
}

// 路径规范化函数
function normalizePath(path: string): string {
  // 处理布局路由的特殊路径
  if (path.includes('@layouts')) {
    return path.replace(/^\/(@layouts)\/[^/]+\//, '/')
  }

  // 确保路径以斜杠开头
  return path.startsWith('/') ? path : `/${path}`
}
