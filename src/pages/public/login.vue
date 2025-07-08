<script setup lang="ts">
definePage({
  meta: {
    title: '登录',
    icon: 'i-carbon-login',
  },
})

const form = reactive({
  username: '',
  password: '',
  captcha: '',
})

const isLoading = ref(false)
const captchaText = ref('ABCD')

function refreshCaptcha() {
  // 简单模拟验证码变化
  captchaText.value = Math.random().toString(36).substring(2, 6).toUpperCase()
}

async function handleSubmit() {
  isLoading.value = true
  console.log('提交表单:', form)

  await new Promise(r => setTimeout(r, 1000)) // mock 请求延迟
  isLoading.value = false
}
</script>

<template>
  <div class="h-full select-none relative overflow-hidden">
    <!-- 背景图 -->
    <div class="inset-0 absolute">
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
        alt="背景"
        loading="lazy"
      >
    </div>

    <!-- 毛玻璃遮罩 -->
    <div class="bg-white/10 inset-0 absolute backdrop-blur-xl" />

    <!-- 登录表单 -->
    <div class="px-4 flex min-h-full items-center justify-center">
      <div class="px-8 py-10 border border-white/30 rounded-2xl bg-white/80 max-w-md w-full shadow-xl transition-all duration-300 backdrop-blur-md space-y-6 hover:shadow-2xl">
        <!-- 标题 -->
        <div class="text-2xl font-bold text-center space-x-sm">
          <span class="text-gray-700">NVIPS</span>
          <span class="text-gray-400">管理后台</span>
        </div>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <!-- 账号 -->
          <div class="field">
            <i-heroicons-user class="icon" />
            <input v-model="form.username" type="text" placeholder="账号" required class="input">
          </div>

          <!-- 密码 -->
          <div class="field">
            <i-heroicons-lock-closed class="icon" />
            <input v-model="form.password" type="password" placeholder="密码" required class="input">
          </div>

          <!-- 验证码 -->
          <div class="flex gap-2">
            <div class="field flex-1">
              <i-heroicons-key class="icon" />
              <input v-model="form.captcha" type="text" placeholder="验证码" required class="input">
            </div>
            <div class="captcha" @click="refreshCaptcha">
              {{ captchaText }}
            </div>
          </div>

          <!-- 登录按钮 -->
          <button class="btn" type="submit" :disabled="isLoading">
            <span v-if="!isLoading" class="flex gap-2 items-center justify-center">
              <i-heroicons-arrow-right-on-rectangle class="size-5" />
              登录
            </span>
            <i-line-md-loading-twotone-loop v-else class="mx-auto h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.field {
  --uno: 'px-4 py-3 border border-gray-200 rounded-xl bg-white flex gap-3 transition-all items-center focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100';
}
.icon {
  --uno: 'text-gray-400 size-5 transition-colors group-focus-within:text-blue-500';
}
.input {
  --uno: 'text-gray-700 outline-none bg-transparent flex-1 placeholder-gray-400';
}
.captcha {
  --uno: 'text-yellow-800 tracking-widest font-mono px-6 border border-yellow-300 rounded-xl bg-yellow-100 flex cursor-pointer transition-colors items-center justify-center';
}
.btn {
  --uno: 'text-white font-semibold py-3 rounded-xl w-full cursor-pointer shadow-md transition-all from-blue-500 to-blue-600 bg-linear-to-r disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg';
}
</style>
