<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 手风琴 Accordion -->
    <div class="collapse collapse-arrow">
      <input type="radio" name="accordion-demo" checked="checked">
      <div class="collapse-title">
        Accordion Item 1
      </div>
      <div class="collapse-content">
        <p>Accordion content 1.</p>
      </div>
    </div>
    <div class="mt-2 collapse collapse-arrow">
      <input type="radio" name="accordion-demo">
      <div class="collapse-title">
        Accordion Item 2
      </div>
      <div class="collapse-content">
        <p>Accordion content 2.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
