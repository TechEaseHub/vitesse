<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础分页 -->
    <div class="join">
      <button class="btn join-item">
        1
      </button>
      <button class="btn btn-active join-item">
        2
      </button>
      <button class="btn join-item">
        3
      </button>
      <button class="btn join-item">
        4
      </button>
    </div>

    <!-- 垂直分页 -->
    <div class="mt-4 join join-vertical">
      <button class="btn join-item">
        Prev
      </button>
      <button class="btn btn-active join-item">
        Current
      </button>
      <button class="btn join-item">
        Next
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
