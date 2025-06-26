<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- Validator 表单验证 -->
    <input type="text" class="input validator" required placeholder="Required field">
    <p class="validator-hint">
      请输入内容
    </p>
    <input type="email" class="mt-2 input validator" required placeholder="Email">
    <p class="validator-hint">
      请输入有效邮箱
    </p>
  </div>
</template>

<style lang="scss" scoped>

</style>
