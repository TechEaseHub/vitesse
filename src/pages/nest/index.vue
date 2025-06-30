<script setup lang="ts">
definePage({
  meta: {
    title: '嵌套父',
    icon: 'i-mdi:folder-outline',
  },
})
</script>

<template>
  <div>
    <h2>嵌套父页面</h2>
    <router-view />
  </div>
</template>
