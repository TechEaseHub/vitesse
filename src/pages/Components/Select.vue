<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- Select 下拉选择 -->
    <select class="max-w-xs w-full select select-primary">
      <option selected disabled>
        Pick one
      </option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <select class="max-w-xs w-full select select-secondary">
      <option selected disabled>
        Pick one
      </option>
      <option>Option A</option>
      <option>Option B</option>
    </select>
    <!-- 尺寸 -->
    <select class="max-w-xs w-full select select-xs">
      <option>XS</option>
    </select>
    <select class="max-w-xs w-full select select-sm">
      <option>SM</option>
    </select>
    <select class="max-w-xs w-full select select-md">
      <option>MD</option>
    </select>
    <select class="max-w-xs w-full select select-lg">
      <option>LG</option>
    </select>
    <select class="max-w-xs w-full select select-xl">
      <option>XL</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>

</style>
