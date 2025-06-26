<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础输入框 -->
    <input type="text" placeholder="Type here" class="input">

    <!-- 颜色输入框 -->
    <div class="flex flex-wrap gap-2">
      <input type="text" placeholder="Neutral" class="input input-neutral">
      <input type="text" placeholder="Primary" class="input input-primary">
      <input type="text" placeholder="Secondary" class="input input-secondary">
      <input type="text" placeholder="Accent" class="input input-accent">
      <input type="text" placeholder="Info" class="input input-info">
      <input type="text" placeholder="Success" class="input input-success">
      <input type="text" placeholder="Warning" class="input input-warning">
      <input type="text" placeholder="Error" class="input input-error">
    </div>

    <!-- 尺寸输入框 -->
    <div class="flex flex-wrap gap-2 items-center">
      <input type="text" placeholder="XS" class="input input-xs">
      <input type="text" placeholder="SM" class="input input-sm">
      <input type="text" placeholder="MD" class="input input-md">
      <input type="text" placeholder="LG" class="input input-lg">
      <input type="text" placeholder="XL" class="input input-xl">
    </div>

    <!-- 样式输入框 -->
    <input type="text" placeholder="Ghost" class="input input-ghost">
  </div>
</template>

<style lang="scss" scoped>

</style>
