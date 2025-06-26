<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础进度条 -->
    <progress class="w-56 progress" value="40" max="100" />

    <!-- 颜色进度条 -->
    <div class="flex flex-col gap-2">
      <progress class="w-56 progress progress-primary" value="60" max="100" />
      <progress class="w-56 progress progress-secondary" value="50" max="100" />
      <progress class="w-56 progress progress-accent" value="70" max="100" />
      <progress class="w-56 progress progress-info" value="80" max="100" />
      <progress class="w-56 progress progress-success" value="90" max="100" />
      <progress class="w-56 progress progress-warning" value="30" max="100" />
      <progress class="w-56 progress progress-error" value="20" max="100" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
