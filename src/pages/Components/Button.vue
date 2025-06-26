<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础按钮 -->
    <button class="btn">
      Button
    </button>

    <!-- 颜色按钮 -->
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-neutral">
        Neutral
      </button>
      <button class="btn btn-primary">
        Primary
      </button>
      <button class="btn btn-secondary">
        Secondary
      </button>
      <button class="btn btn-accent">
        Accent
      </button>
      <button class="btn btn-info">
        Info
      </button>
      <button class="btn btn-success">
        Success
      </button>
      <button class="btn btn-warning">
        Warning
      </button>
      <button class="btn btn-error">
        Error
      </button>
    </div>

    <!-- 按钮尺寸 -->
    <div class="flex flex-wrap gap-2 items-center">
      <button class="btn btn-xs">
        xs
      </button>
      <button class="btn btn-sm">
        sm
      </button>
      <button class="btn btn-md">
        md
      </button>
      <button class="btn btn-lg">
        lg
      </button>
      <button class="btn btn-xl">
        xl
      </button>
    </div>

    <!-- 按钮样式 -->
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-outline">
        Outline
      </button>
      <button class="btn btn-dash">
        Dash
      </button>
      <button class="btn btn-soft">
        Soft
      </button>
      <button class="btn btn-ghost">
        Ghost
      </button>
      <button class="btn btn-link">
        Link
      </button>
    </div>

    <!-- 按钮行为 -->
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-active">
        Active
      </button>
      <button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">
        Disabled
      </button>
    </div>

    <!-- 按钮修饰符 -->
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-wide">
        Wide
      </button>
      <button class="btn btn-block">
        Block
      </button>
      <button class="btn btn-square">
        S
      </button>
      <button class="btn btn-circle">
        C
      </button>
    </div>

    <!-- 按钮图标 -->
    <div class="flex flex-wrap gap-2 items-center">
      <button class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Icon Left
      </button>
      <button class="btn btn-secondary">
        Icon Right
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
