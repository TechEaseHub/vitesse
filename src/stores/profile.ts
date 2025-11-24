interface ProfileState {
  userId: string
  name: string
  avatar: string
  email: string
  phone: string
}

export const useProfileStore = defineStore(
  'profile',
  () => {
    /**  用户唯一 ID */
    const userId = ref('')

    /**  用户名称（昵称或真实姓名） */
    const name = ref('')

    /**  用户头像 URL */
    const avatar = ref('')

    /**  用户邮箱地址 */
    const email = ref('')

    /**  用户手机号 */
    const phone = ref('')

    /**
     * 设置用户资料
     * 可批量更新部分字段
     * @param profile 用户资料字段（部分）
     */
    function setProfile(profile: Partial<ProfileState>) {
      if (profile.userId !== undefined)
        userId.value = profile.userId
      if (profile.name !== undefined)
        name.value = profile.name
      if (profile.avatar !== undefined)
        avatar.value = profile.avatar
      if (profile.email !== undefined)
        email.value = profile.email
      if (profile.phone !== undefined)
        phone.value = profile.phone
      profileEvents.onProfileChanged.trigger(profile)
    }

    /**
     * 清空用户资料
     * 常用于退出登录或切换账户时
     */
    function clearProfile() {
      userId.value = ''
      name.value = ''
      avatar.value = ''
      email.value = ''
      phone.value = ''
      profileEvents.onProfileCleared.trigger()
    }

    // 对外暴露状态与方法
    return {
      userId,
      name,
      avatar,
      email,
      phone,
      setProfile,
      clearProfile,
    }
  },
  {
    persist: true,
  },
)
