<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础标签页 -->
    <div role="tablist" class="tabs tabs-box">
      <button role="tab" class="tab tab-active">
        Tab 1
      </button>
      <button role="tab" class="tab">
        Tab 2
      </button>
      <button role="tab" class="tab">
        Tab 3
      </button>
    </div>

    <!-- 单选按钮标签页 -->
    <div role="tablist" class="mt-4 tabs tabs-box">
      <input type="radio" name="tabs-demo" class="tab" aria-label="Tab A" checked>
      <input type="radio" name="tabs-demo" class="tab" aria-label="Tab B">
      <input type="radio" name="tabs-demo" class="tab" aria-label="Tab C">
    </div>

    <!-- 不同样式标签页 -->
    <div role="tablist" class="mt-4 tabs tabs-border">
      <button role="tab" class="tab tab-active">
        Border
      </button>
      <button role="tab" class="tab">
        Tab
      </button>
    </div>
    <div role="tablist" class="mt-4 tabs tabs-lift">
      <button role="tab" class="tab tab-active">
        Lift
      </button>
      <button role="tab" class="tab">
        Tab
      </button>
    </div>
    <div role="tablist" class="mt-4 tabs tabs-bottom tabs-box">
      <button role="tab" class="tab tab-active">
        Bottom
      </button>
      <button role="tab" class="tab">
        Tab
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
