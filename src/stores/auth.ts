export const useAuthStore = defineStore(
  'auth',
  () => {
  // 登录令牌
    const token = ref('')

    // 是否已登录（根据 token 推断）
    const isLoggedIn = computed(() => !!token.value)

    /**
     * 设置 token 并更新登录状态
     * @param val 新的 token
     */
    function setToken(val: string) {
      token.value = val
      userEvents.onTokenChanged.trigger({ token: val })
      if (val)
        userEvents.onLogin.trigger({ userId: '' })
    }

    /**
     * 清除 token，登出
     */
    function logout() {
      token.value = ''
      userEvents.onLogout.trigger()
    }

    return {
      token,
      isLoggedIn,
      setToken,
      logout,
    }
  },
  {
    persist: true,
  },
)
