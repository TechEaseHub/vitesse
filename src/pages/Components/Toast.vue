<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础 Toast -->
    <div class="toast toast-end toast-top">
      <div class="alert alert-info">
        <span>New message arrived.</span>
      </div>
    </div>

    <!-- 多个 Toast 位置 -->
    <div class="toast toast-start toast-bottom">
      <div class="alert alert-success">
        <span>Saved successfully!</span>
      </div>
    </div>
    <div class="toast toast-center toast-middle">
      <div class="alert alert-warning">
        <span>Warning: Check your input.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
