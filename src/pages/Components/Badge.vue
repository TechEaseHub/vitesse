<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础徽章 -->
    <span class="badge">Badge</span>

    <!-- 颜色徽章 -->
    <div class="flex flex-wrap gap-2">
      <span class="badge badge-neutral">Neutral</span>
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-accent">Accent</span>
      <span class="badge badge-info">Info</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-error">Error</span>
    </div>

    <!-- 尺寸徽章 -->
    <div class="flex flex-wrap gap-2 items-center">
      <span class="badge badge-xs">XS</span>
      <span class="badge badge-sm">SM</span>
      <span class="badge badge-md">MD</span>
      <span class="badge badge-lg">LG</span>
      <span class="badge badge-xl">XL</span>
    </div>

    <!-- 样式徽章 -->
    <div class="flex flex-wrap gap-2">
      <span class="badge badge-outline">Outline</span>
      <span class="badge badge-dash">Dash</span>
      <span class="badge badge-soft">Soft</span>
      <span class="badge badge-ghost">Ghost</span>
    </div>

    <!-- 空徽章 -->
    <span class="badge" />
  </div>
</template>

<style lang="scss" scoped>

</style>
