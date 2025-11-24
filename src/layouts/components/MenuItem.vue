<script setup lang="ts">
import type { MenuItem } from '../utils/menuGenerator'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'MenuItem',
})

const { item, level: menuLevel = 1 } = defineProps<{
  item: MenuItem
  level?: number
}>()
const router = useRouter()
const [isOpen, toggleOpen] = useToggle()

// 判断菜单项是否激活，支持动态路由
const isActive = computed(() => isMenuActive(item))

function isMenuActive(menu: MenuItem): boolean {
  // 当前路由所有 matched 路由的 path
  const matchedPaths = router.currentRoute.value.matched.map(r => r.path)
  if (matchedPaths.includes(menu.path))
    return true
  if (menu.children)
    return menu.children.some(child => isMenuActive(child))
  return false
}

// 监听路由变化，自动展开/收起分组菜单
watch(() => router.currentRoute.value.fullPath, () => {
  if (item.children && isActive.value) {
    isOpen.value = true
  }
  else {
    isOpen.value = false
  }
}, { immediate: true })

const [DefineMenuContent, ReuseMenuContent] = createReusableTemplate<{
  active?: boolean
  icon?: string
  title: string
  extra?: any
}>()
</script>

<template>
  <DefineMenuContent v-slot="{ active, icon, title, extra }">
    <span v-if="active" class="rounded-r bg-blue-500 h-full w-1 left-0 top-0 absolute" />
    <i v-if="icon" class="text-base" :class="icon" />
    <span class="text-base flex-1">{{ title }}</span>
    <template v-if="extra">
      <component :is="extra" />
    </template>
  </DefineMenuContent>

  <li>
    <div v-if="item.children?.length">
      <div
        class="px-4 py-2 flex gap-2 cursor-pointer select-none transition-colors duration-200 items-center relative"
        :class="[isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-gray-100']"
        tabindex="0"
        @click="toggleOpen()"
        @keydown.enter.prevent="toggleOpen()"
        @keydown.space.prevent="toggleOpen()"
      >
        <ReuseMenuContent
          :icon="item.icon"
          :title="item.title"
          :extra="h('i', {
            class: [
              'text-base text-gray-400 transition-transform duration-200',
              isOpen ? 'i-mdi-chevron-up' : 'i-mdi-chevron-down',
            ].join(' '),
          })
          "
        />
      </div>

      <transition name="fade-slide">
        <ul
          v-show="isOpen"
          class="m-1 ml-4 mr-0 border border-blue-200 rounded-md overflow-hidden space-y-1"
        >
          <MenuItem
            v-for="child in item.children"
            :key="child.path"
            :item="child"
            :level="menuLevel + 1"
          />
        </ul>
      </transition>
    </div>

    <router-link
      v-else
      :to="item.path"
      class="px-4 py-2 flex gap-2 select-none transition-colors duration-200 items-center relative"
      :class="[isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-gray-100']"
    >
      <ReuseMenuContent
        :active="isActive"
        :icon="item.icon"
        :title="item.title"
        :level="level"
      />
    </router-link>
  </li>
</template>

<style scoped lang="scss">
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
