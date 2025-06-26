<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- Dock 底部导航 -->
    <div class="dock dock-md">
      <button class="dock-active">
        <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" /></svg>
        <span class="dock-label">Home</span>
      </button>
      <button>
        <svg width="24" height="24" fill="none"><rect x="4" y="4" width="16" height="16" stroke="currentColor" stroke-width="2" /></svg>
        <span class="dock-label">Menu</span>
      </button>
      <button>
        <svg width="24" height="24" fill="none"><polygon points="12,2 22,22 2,22" stroke="currentColor" stroke-width="2" /></svg>
        <span class="dock-label">Explore</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
