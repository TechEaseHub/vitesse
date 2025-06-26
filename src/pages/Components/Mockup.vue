<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- Mockup 浏览器窗口 -->
    <div class="bg-base-300 border mockup-browser">
      <div class="mockup-browser-toolbar">
        <div class="input">
          https://daisyui.com
        </div>
      </div>
      <div class="p-4">
        Browser content here
      </div>
    </div>
    <!-- Mockup 代码块 -->
    <div class="mt-4 mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix="&gt;"><code>npx tailwindcss -i ./input.css -o ./output.css --watch</code></pre>
    </div>
    <!-- Mockup 手机 -->
    <div class="mt-4 mockup-phone">
      <div class="mockup-phone-camera" />
      <div class="bg-base-200 mockup-phone-display">
        <div class="p-4">
          Phone content here
        </div>
      </div>
    </div>
    <!-- Mockup 窗口 -->
    <div class="bg-base-300 mt-4 border mockup-window">
      <div class="p-4">
        Window content here
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
