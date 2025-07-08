import type { RouteMap, RouteRecordRaw } from 'vue-router'

/** 菜单项类型声明 */
export interface MenuItem {
  title: string
  path: string
  icon?: string
  order?: number
  children?: MenuItem[]
  menuParent?: RouteMap[keyof RouteMap]['path']
}

/**
 * 根据路由配置生成菜单项
 * @param routes 路由配置数组
 * @returns 处理后的菜单项数组
 */
export function generateMenus(routes: RouteRecordRaw[], currentRoles: string[]): MenuItem[] {
  const nestedRoutes = buildNestedRoutes(routes)
  // console.log('nestedRoutes', nestedRoutes)
  // return []

  const menus = flattenRoutesToMenus(nestedRoutes, '', currentRoles)
  return processMenus(menus)
}

function buildNestedRoutes(flatRoutes: any[]) {
  // 1. 只保留有 meta.title 的路由，且 path 唯一
  const filtered = flatRoutes.filter(r => r.meta && r.meta.title)
  const map = new Map<string, any>()
  filtered.forEach((route) => {
    map.set(route.path, { ...route, children: [] })
  })

  const roots: any[] = []
  for (const route of map.values()) {
    const segments = route.path.split('/').filter(Boolean)
    if (segments.length <= 1) {
      roots.push(route)
      continue
    }
    const parentPath = `/${segments.slice(0, -1).join('/')}`
    const parent = map.get(parentPath)
    if (parent) {
      parent.children.push(route)
    }
    else {
      roots.push(route)
    }
  }
  return roots
}

/**
 * 将嵌套路由扁平化为菜单项，自动构建完整路径并处理 meta 信息。
 * @param routes 路由配置数组（支持嵌套）
 * @param parentPath 父级路径（默认空字符串）
 * @returns 扁平化的菜单项数组
 */
function flattenRoutesToMenus(routes: RouteRecordRaw[], parentPath = '', currentRoles: string[] = []): MenuItem[] {
  const menus: MenuItem[] = []

  // 先查找 index 路由（即 path === ''）作为分组父级
  let indexRoute: RouteRecordRaw | undefined
  for (const route of routes) {
    if (route.path === '' && route.meta && route.meta.title) {
      indexRoute = route
      break
    }
  }

  // 如果有 indexRoute，优先用它的 meta 作为分组菜单项
  if (indexRoute) {
    const meta = indexRoute.meta
    // 权限判断
    const allowRoles = meta?.roles
    const hasPermission = !allowRoles || allowRoles.some(role => currentRoles.includes(role))
    if (hasPermission && meta?.title && !meta.hideInMenu && !meta.hidden) {
      const menu: MenuItem = {
        path: parentPath || '/',
        title: meta.title,
        icon: meta.icon,
        order: meta.order,
        menuParent: meta.menuParent,
      }
      // 递归处理子路由（排除 indexRoute 自身）
      const children = flattenRoutesToMenus(routes.filter(r => r !== indexRoute), parentPath, currentRoles)
      if (children.length)
        menu.children = children
      menus.push(menu)
      return menus
    }
  }

  // 否则正常处理
  for (const route of routes) {
    // 合成完整路径
    const fullPath = normalizePath(parentPath, route.path)

    // 获取当前路由的 meta
    let meta = route.meta

    // 如果当前路由没有 meta 或 meta.title，尝试提取默认子路由（path === ''）的 meta
    if ((!meta || !meta.title) && Array.isArray(route.children)) {
      const defaultChild = route.children.find(child => child.path === '' && child.meta?.title)
      if (defaultChild)
        meta = defaultChild.meta
    }

    // 权限判断：meta.roles 不存在时默认可访问
    const allowRoles = meta?.roles
    const hasPermission = !allowRoles || allowRoles.some(role => currentRoles.includes(role))

    // 无权限 或 不展示的项，跳过
    if (!hasPermission || !meta?.title || meta.hideInMenu || meta.hidden)
      continue

    // 构建菜单项
    const menu: MenuItem = {
      path: fullPath,
      title: meta.title,
      icon: meta.icon,
      order: meta.order,
      menuParent: meta.menuParent,
    }

    // 递归处理子路由
    const children = flattenRoutesToMenus(route.children || [], fullPath, currentRoles)
    if (children.length)
      menu.children = children

    menus.push(menu)
  }

  return menus
}

/**
 * 规范化路径，拼接父路径和当前路径，确保生成完整路径。
 * - 若当前路径是绝对路径（以 / 开头），直接返回。
 * - 若父路径为空或根路径，直接拼接为 /current。
 * - 否则，将 parent 和 current 拼接，并去除多余的斜杠。
 *
 * @param parent 父路径，如 "/user"
 * @param current 当前路径，如 "profile"
 * @returns 拼接后的完整路径，如 "/user/profile"
 */
function normalizePath(parent: string, current: string): string {
  // 当前路径已是绝对路径，直接返回
  if (current.startsWith('/'))
    return current

  // 父路径为空或根路径，拼接后加上 '/'
  if (!parent || parent === '/')
    return `/${current}`

  // 正常拼接，确保中间只有一个斜杠
  return `${parent.replace(/\/$/, '')}/${current}`
}

/**
 * 处理菜单项：排序并扁平化单子菜单
 * @param menus 原始菜单项数组
 * @returns 处理后的菜单项数组
 */
function processMenus(menus: MenuItem[]): MenuItem[] {
  const sorted = sortMenus(menus)
  const grouped = groupMenusByMenuParent(sorted)

  return flattenSingleChildMenus(grouped)
}

/**
 * 递归地对菜单项进行排序。
 * - 优先按 `order` 字段升序排序（默认值为 0）
 * - 如果存在子菜单 `children`，也会递归排序
 *
 * @param menus 菜单项数组
 * @returns 排序后的菜单项数组（不改变原始数据）
 */
function sortMenus(menus: MenuItem[]): MenuItem[] {
  return [...menus]
    // 按 order 升序排列，空值按 0 处理
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    // 递归处理 children
    .map(menu => ({
      ...menu,
      children: menu.children?.length ? sortMenus(menu.children) : undefined,
    }))
}

/**
 * 扁平化“单子菜单”结构。
 * - 若某菜单只有一个子菜单，则提升该子菜单至当前层级。
 * - 提升时优先保留子菜单的 icon，若无则使用父菜单的 icon。
 * - 对嵌套结构递归处理。
 *
 * @param menus 菜单项数组
 * @returns 扁平化后的菜单项数组
 */
function flattenSingleChildMenus(menus: MenuItem[]): MenuItem[] {
  return menus.flatMap((menu): MenuItem[] => {
    const { children } = menu

    // 情况 1：无子菜单 或 子菜单数量不等于 1，保持原结构（递归子项）
    if (!children || children.length !== 1) {
      return [{
        ...menu,
        icon: menu.icon ?? undefined, // 显式赋值以防止 undefined 被删除
        children: children ? flattenSingleChildMenus(children) : undefined,
      }]
    }

    // 情况 2：仅有一个子菜单，进行“提升”
    const [child] = children
    return [{
      ...child,
      icon: child.icon ?? menu.icon ?? undefined,
    }]
  })
}

/**
 * 根据 `menuParent` 字段将菜单项重新归组。
 * - 若菜单项存在 meta.menuParent，则将其挂载到对应的父级菜单下。
 * - 支持任意层级的菜单归组（不局限于顶层）。
 * - 构建完成后移除临时的 menuParent 字段，避免暴露到最终菜单结构中。
 *
 * 示例：
 * - 页面 A 设置 menuParent: '/dashboard'
 * - 页面 A 会被插入到 path 为 '/dashboard' 的菜单项的 children 中
 *
 * @param menus 扁平化的菜单项数组（尚未归组）
 * @returns 已归组的菜单项数组（顶级菜单）
 */
function groupMenusByMenuParent(menus: MenuItem[]): MenuItem[] {
  const map = new Map<string, MenuItem>()
  const result: MenuItem[] = []

  // 1. 构建 path -> menu 的映射表，便于查找父菜单项
  for (const menu of menus)
    map.set(menu.path, menu)

  // 2. 遍历所有菜单项，根据 menuParent 归组到其父菜单下
  for (const menu of menus) {
    const parentPath = menu.menuParent
    if (parentPath && map.has(parentPath)) {
      const parent = map.get(parentPath)!
      parent.children = parent.children || []
      parent.children.push(menu)
    }
    else {
      result.push(menu) // 无 menuParent 则视为顶级菜单
    }
  }

  // 3. 清理临时字段 menuParent
  return result.map(cleanMenuParent)
}

/**
 * 递归移除菜单项中的临时字段 `menuParent`
 * - 确保该字段不被渲染组件或 UI 使用
 * - 该字段仅作为构建菜单树的中间参数使用
 *
 * @param menu 菜单项对象
 * @returns 清除 menuParent 字段后的菜单项
 */
function cleanMenuParent(menu: MenuItem): MenuItem {
  const { menuParent, ...rest } = menu as any
  if (rest.children)
    rest.children = rest.children.map(cleanMenuParent)
  return rest
}
