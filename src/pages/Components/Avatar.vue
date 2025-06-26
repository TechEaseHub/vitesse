<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础头像 -->
    <div class="avatar">
      <div>
        <img src="https://picsum.photos/64">
      </div>
    </div>

    <!-- 头像修饰符 -->
    <div class="flex flex-wrap gap-4 items-center">
      <div class="avatar avatar-online">
        <div>
          <img src="https://picsum.photos/64?1">
        </div>
      </div>
      <div class="avatar avatar-offline">
        <div>
          <img src="https://picsum.photos/64?2">
        </div>
      </div>
      <div class="avatar avatar-placeholder">
        <div>AB</div>
      </div>
    </div>

    <!-- 头像组 -->
    <div class="avatar-group -space-x-4">
      <div class="avatar">
        <div>
          <img src="https://picsum.photos/32?3">
        </div>
      </div>
      <div class="avatar">
        <div>
          <img src="https://picsum.photos/32?4">
        </div>
      </div>
      <div class="avatar">
        <div>
          <img src="https://picsum.photos/32?5">
        </div>
      </div>
    </div>

    <!-- 头像遮罩 -->
    <div class="flex flex-wrap gap-4 items-center">
      <div class="avatar">
        <div class="h-16 w-16 mask mask-squircle">
          <img src="https://picsum.photos/64?6">
        </div>
      </div>
      <div class="avatar">
        <div class="h-16 w-16 mask mask-hexagon">
          <img src="https://picsum.photos/64?7">
        </div>
      </div>
      <div class="avatar">
        <div class="h-16 w-16 mask mask-triangle">
          <img src="https://picsum.photos/64?8">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
