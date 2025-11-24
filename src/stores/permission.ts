export const usePermissionStore = defineStore(
  'permission',
  () => {
    /** 角色列表，例如：['admin', 'editor'] */
    const roles = ref<string[]>([])

    /** 权限列表，例如：['btn.add', 'menu.view'] */
    const permissions = ref<string[]>([])

    /**
     * 判断是否拥有指定角色
     */
    const hasRole = (role: string) => roles.value.includes(role)

    /**
     * 判断是否拥有任意一个角色
     */
    const hasAnyRole = (targetRoles: string[]) =>
      targetRoles.some(role => roles.value.includes(role))

    /**
     * 判断是否拥有指定权限
     */
    const hasPermission = (perm: string) => permissions.value.includes(perm)

    /**
     * 设置角色列表
     */
    function setRoles(r: string[]) {
      roles.value = r
      permissionEvents.onRolesChanged.trigger({ roles: r })
    }

    /**
     * 设置权限列表
     */
    function setPermissions(p: string[]) {
      permissions.value = p
      permissionEvents.onPermissionsChanged.trigger({ permissions: p })
    }

    /**
     * 清除角色与权限（通常用于登出）
     */
    function clear() {
      roles.value = []
      permissions.value = []
      permissionEvents.onCleared.trigger()
    }

    return {
      roles,
      permissions,
      hasRole,
      hasAnyRole,
      hasPermission,
      setRoles,
      setPermissions,
      clear,
    }
  },
  {
    persist: true,
  },
)
