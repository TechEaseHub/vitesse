<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础抽屉 -->
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle">
      <div class="drawer-content">
        <label for="my-drawer" class="drawer-button btn">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay" />
        <ul class="bg-base-100 text-base-content p-4 min-h-full w-80 menu">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>

    <!-- 右侧抽屉 -->
    <div class="mt-8 drawer drawer-end">
      <input id="drawer-right" type="checkbox" class="drawer-toggle">
      <div class="drawer-content">
        <label for="drawer-right" class="drawer-button btn">Open right drawer</label>
      </div>
      <div class="drawer-side">
        <label for="drawer-right" class="drawer-overlay" />
        <ul class="bg-base-100 text-base-content p-4 min-h-full w-80 menu">
          <li><a>Right Sidebar 1</a></li>
          <li><a>Right Sidebar 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
