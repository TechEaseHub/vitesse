<script setup lang="ts">
definePage({
  meta: {
    title: '嵌套子',
    icon: 'i-mdi:file-outline',
    parentPath: '/nest',
  },
})
</script>

<template>
  <div>
    <h3>嵌套子页面</h3>
    <p>这里是嵌套路由的子页面内容。</p>
    <router-view />
  </div>
</template>
