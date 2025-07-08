<script setup lang="ts">
import { useRouter } from 'vue-router'

import MenuItem from './components/MenuItem.vue'
import { generateMenus } from './utils/menuGenerator'

const router = useRouter()
const routes = router.getRoutes()

const menuData = computed(() => generateMenus(routes, ['manager']))

console.log('routes', routes)
console.log('Menu Data:', menuData.value)
</script>

<template>
  <div class="bg-gray-100 flex h-screen min-h-screen overflow-hidden">
    <!-- 侧边栏 -->
    <aside class="border-r border-gray-200 bg-white flex flex-shrink-0 flex-col h-screen w-64 overflow-y-auto">
      <div class="px-6 border-b border-gray-200 flex h-16 items-center from-gray-50 to-white">
        <img src="/favicon.svg" class="mr-2 h-7 w-7" alt="logo-mini">
        <span class="text-lg text-gray-700 font-bold">后台管理</span>
      </div>
      <div class="flex-1 overflow-y-auto">
        <ul class="space-y-1">
          <MenuItem v-for="item in menuData" :key="item.path" :item="item" />
        </ul>
      </div>
    </aside>

    <!-- 右侧主区域 -->
    <div class="bg-gray-50 flex flex-1 flex-col h-screen min-w-0">
      <!-- 顶部导航栏，仅在主内容区上方 -->
      <header class="px-8 border-b border-gray-200 bg-white flex h-16 items-center">
        <div class="flex flex-1 items-center">
          <!-- 这里预留面包屑区域 -->
        </div>
        <div class="flex gap-4 items-center justify-end">
          <button class="text-gray-700 px-4 py-1 rounded-lg bg-gray-100 shadow transition hover:bg-gray-200">
            操作
          </button>
          <div class="ml-2 rounded-full bg-gray-200 flex h-9 w-9 cursor-pointer items-center justify-center">
            <i-material-symbols-person />
          </div>
        </div>
      </header>
      <!-- 主内容区 -->
      <main class="p-4 flex-1 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
