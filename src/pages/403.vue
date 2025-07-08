<script setup lang="ts">
definePage({
  meta: {
    layout: 'page',
    title: '禁止访问',
    hideInMenu: true,
  },
})
</script>

<template>
  <section class="px-6 bg-white flex min-h-screen items-center justify-center dark:bg-gray-900">
    <div class="text-center max-w-lg w-full">
      <div class="text-red-600 mx-auto mb-8 rounded-full bg-red-100 flex h-16 w-16 items-center justify-center dark:bg-gray-800">
        <i-mdi-shield-alert-outline class="h-10 w-10" />
      </div>

      <h1 class="text-4xl text-gray-900 font-semibold mb-4 dark:text-white">
        Forbidden
      </h1>

      <p class="text-gray-600 mb-8 dark:text-gray-400">
        抱歉，您没有权限访问此页面
      </p>

      <div class="flex flex-col gap-4 justify-center sm:flex-row sm:gap-6">
        <button
          class="text-gray-700 px-6 py-3 border border-gray-300 rounded-lg bg-white flex gap-2 cursor-pointer transition items-center justify-center dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
          type="button"
          @click="$router.back()"
        >
          <i-mdi-keyboard-backspace class="size-5" />
          返回上一页
        </button>

        <button
          class="text-white px-6 py-3 rounded-lg bg-red-600 cursor-pointer transition dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-500"
          type="button"
          @click="$router.push('/')"
        >
          返回首页
        </button>
      </div>
    </div>
  </section>
</template>
