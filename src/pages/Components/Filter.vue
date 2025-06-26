<script lang="ts" setup>

</script>

<template>
  <div class="flex space-y-4">
    <!-- Filter 过滤器 -->
    <form class="filter">
      <input class="btn btn-square" type="reset" name="filter-demo" value="×">
      <input class="btn" type="radio" name="filter-demo" aria-label="全部">
      <input class="btn" type="radio" name="filter-demo" aria-label="已完成">
      <input class="btn" type="radio" name="filter-demo" aria-label="未完成">
    </form>
    <form class="filter">
      <input class="btn btn-square" type="reset" value="×">
      <input class="btn" type="radio" name="frameworks" aria-label="Svelte">
      <input class="btn" type="radio" name="frameworks" aria-label="Vue">
      <input class="btn" type="radio" name="frameworks" aria-label="React">
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
