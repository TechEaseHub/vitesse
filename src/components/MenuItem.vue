<script setup lang="ts">
import type { MenuItem } from '~/composables/menuGenerator'

defineOptions({
  name: 'MenuItem',
})

const { item, activePath, level: menuLevel = 1 } = defineProps<{
  item: MenuItem
  activePath: string
  level?: number
}>()

const isOpen = ref(false)

const isActive = computed(() => item.children && isActiveGroup(item.path, activePath))

/**
 * 判断当前路径是否属于某分组（严格匹配分组路径）
 * @param path 分组路径
 * @param active 当前激活路径
 * @returns 是否属于该分组
 */
function isActiveGroup(path: string, active: string) {
  if (active === path)
    return true
  if (!active.startsWith(path))
    return false
  // 只展开严格属于该分组的路径
  const nextChar = active.slice(path.length, path.length + 1)
  return nextChar === '/'
}

function toggleOpen() {
  isOpen.value = !isOpen.value
}

// 监听 activePath 变化，自动展开/收起分组菜单
watch(() => activePath, (val) => {
  if (item.children && isActiveGroup(item.path, val)) {
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
    <div v-if="item.children">
      <div
        class="px-4 py-2 flex gap-2 cursor-pointer select-none transition-colors duration-200 items-center relative"
        :class="[isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-gray-100']"
        tabindex="0"
        @click="toggleOpen"
        @keydown.enter.prevent="toggleOpen"
        @keydown.space.prevent="toggleOpen"
      >
        <ReuseMenuContent
          :icon="item.icon"
          :title="item.title"
          :extra="h('i', { class: `text-base text-gray-400 transition-transform duration-200 ${isOpen ? 'i-mdi:chevron-down rotate-180' : 'i-mdi:chevron-down'}` })"
        />
      </div>

      <transition name="fade-slide">
        <ul
          v-show="isOpen"
          class="ml-4 border-l border-gray-100 rounded-none bg-transparent shadow-none"
        >
          <MenuItem
            v-for="child in item.children"
            :key="child.path"
            :item="child"
            :active-path="activePath"
            :level="menuLevel + 1"
          />
        </ul>
      </transition>
    </div>

    <router-link
      v-else
      :to="item.path"
      class="menu-item px-4 py-2 flex gap-2 transition-colors duration-200 items-center relative"
      :class="[activePath === item.path ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-gray-100']"
    >
      <ReuseMenuContent
        :active="activePath === item.path"
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
