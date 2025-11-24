export const useSettingsStore = defineStore(
  'settings',
  () => {
    /** 当前语言（如 zh-CN / en-US） */
    const locale = ref('zh-CN')
    /**  // 当前主题（light 或 dark） */
    const theme = ref<'light' | 'dark'>('light')
    /**  // 上次登录时间字符串 */
    const lastLogin = ref('')

    /**
     * 设置语言环境
     */
    function setLocale(val: string) {
      locale.value = val
      settingsEvents.onLocaleChanged.trigger({ locale: val })
    }

    /**
     * 设置主题模式
     */
    function setTheme(val: 'light' | 'dark') {
      theme.value = val
      settingsEvents.onThemeChanged.trigger({ theme: val })
    }

    /**
     * 设置最近登录时间
     */
    function setLastLogin(val: string) {
      lastLogin.value = val
      settingsEvents.onLastLoginChanged.trigger({ lastLogin: val })
    }

    return {
      locale,
      theme,
      lastLogin,
      setLocale,
      setTheme,
      setLastLogin,
    }
  },
  {
    persist: true,
  },
)
