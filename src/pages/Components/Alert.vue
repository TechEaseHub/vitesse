<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础警告 -->
    <div role="alert" class="alert">
      This is a basic alert
    </div>

    <!-- 颜色警告 -->
    <div class="flex flex-col gap-2">
      <div role="alert" class="alert alert-info">
        Info alert
      </div>
      <div role="alert" class="alert alert-success">
        Success alert
      </div>
      <div role="alert" class="alert alert-warning">
        Warning alert
      </div>
      <div role="alert" class="alert alert-error">
        Error alert
      </div>
    </div>

    <!-- 样式警告 -->
    <div class="flex flex-col gap-2">
      <div role="alert" class="alert alert-outline">
        Outline alert
      </div>
      <div role="alert" class="alert alert-dash">
        Dash alert
      </div>
      <div role="alert" class="alert alert-soft">
        Soft alert
      </div>
    </div>

    <!-- 方向警告 -->
    <div class="flex flex-col gap-2">
      <div role="alert" class="alert alert-vertical">
        Vertical alert
      </div>
      <div role="alert" class="alert alert-horizontal">
        Horizontal alert
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
