<script lang="ts" setup>
definePage({
  meta: {
    title: 'API',
    icon: 'i-heroicons-code-bracket-solid',
    order: -10,
  },
})

const captchaApi = useApiFetch<Blob>('/login/getVerifyCode')
const blobUrl = useBlobUrl(captchaApi.data)
function fetchCaptcha() {
  captchaApi.post().blob().execute()
}
</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-2xl font-bold">
      API 示例
    </h1>

    <button class="btn" :disabled="captchaApi.isFetching.value" @click="fetchCaptcha">
      <span v-if="!captchaApi.isFetching.value">发起请求</span>
      <span v-else>请求中...</span>
    </button>

    <div v-if="blobUrl" class="mt-4">
      <img
        :src="blobUrl"
        alt="验证码图片"
        class="mx-auto border rounded h-auto w-40"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
