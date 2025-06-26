<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 径向进度条 RadialProgress -->
    <div class="flex flex-wrap gap-4">
      <div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">
        70%
      </div>
      <div class="text-primary radial-progress" style="--value:40; --size:4rem;" aria-valuenow="40" role="progressbar">
        40%
      </div>
      <div class="text-success radial-progress" style="--value:90; --thickness:8px;" aria-valuenow="90" role="progressbar">
        90%
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
