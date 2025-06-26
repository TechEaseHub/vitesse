<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 折叠 Collapse -->
    <div tabindex="0" class="bg-base-100 border-base-300 border collapse collapse-arrow rounded-box">
      <div class="text-xl font-medium collapse-title">
        Click me to show/hide content
      </div>
      <div class="collapse-content">
        <p>This is the collapse content.</p>
      </div>
    </div>
    <!-- 多个折叠 -->
    <div class="border-base-300 bg-base-100 mt-4 border collapse collapse-plus rounded-box">
      <div class="collapse-title">
        Another collapse
      </div>
      <div class="collapse-content">
        <p>More content here.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
