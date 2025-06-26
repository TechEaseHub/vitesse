<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- Stack 堆叠 -->
    <div class="h-32 w-32 stack">
      <div class="bg-primary text-primary-content p-2">
        A
      </div>
      <div class="bg-secondary text-secondary-content p-2">
        B
      </div>
      <div class="bg-accent text-accent-content p-2">
        C
      </div>
    </div>
    <div class="mt-4 h-32 w-32 stack stack-top">
      <div class="bg-info text-info-content p-2">
        Top
      </div>
      <div class="bg-success text-success-content p-2">
        Middle
      </div>
      <div class="bg-warning text-warning-content p-2">
        Bottom
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
