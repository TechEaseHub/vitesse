<script setup lang="ts">
definePage({
  meta: {
    title: '嵌套子2',
    icon: 'i-mdi:file-outline',
    parentPath: '/nest',
  },
})
</script>

<template>
  <div>
    <h3>嵌套子页面2</h3>
    <p>这里是嵌套路由的第二个子页面内容。</p>
    <router-view />
  </div>
</template>
