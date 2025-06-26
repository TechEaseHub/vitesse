<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础卡片 -->
    <div class="bg-base-100 w-96 shadow-xl card">
      <figure><img src="https://picsum.photos/400/200" alt="Card image"></figure>
      <div class="card-body">
        <h2 class="card-title">
          Card title
        </h2>
        <p>Card content goes here.</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">
            Action
          </button>
        </div>
      </div>
    </div>

    <!-- 卡片尺寸 -->
    <div class="flex flex-wrap gap-4">
      <div class="bg-base-100 shadow card card-xs">
        <div class="card-body">
          <h2 class="card-title">
            XS
          </h2>
        </div>
      </div>
      <div class="bg-base-100 shadow card card-sm">
        <div class="card-body">
          <h2 class="card-title">
            SM
          </h2>
        </div>
      </div>
      <div class="bg-base-100 shadow card card-md">
        <div class="card-body">
          <h2 class="card-title">
            MD
          </h2>
        </div>
      </div>
      <div class="bg-base-100 shadow card card-lg">
        <div class="card-body">
          <h2 class="card-title">
            LG
          </h2>
        </div>
      </div>
      <div class="bg-base-100 shadow card card-xl">
        <div class="card-body">
          <h2 class="card-title">
            XL
          </h2>
        </div>
      </div>
    </div>

    <!-- 卡片样式 -->
    <div class="flex flex-wrap gap-4">
      <div class="bg-base-100 w-64 card card-border">
        <div class="card-body">
          <h2 class="card-title">
            Border
          </h2>
        </div>
      </div>
      <div class="bg-base-100 w-64 card card-dash">
        <div class="card-body">
          <h2 class="card-title">
            Dash
          </h2>
        </div>
      </div>
    </div>

    <!-- 卡片修饰符 -->
    <div class="bg-base-100 shadow-xl card card-side">
      <figure><img src="https://picsum.photos/200/200" alt="Side image"></figure>
      <div class="card-body">
        <h2 class="card-title">
          Side Card
        </h2>
        <p>With side image.</p>
      </div>
    </div>

    <!-- 图片全覆盖卡片 -->
    <div class="w-96 card image-full">
      <figure><img src="https://picsum.photos/400/200?2" alt="Full image"></figure>
      <div class="card-body">
        <h2 class="card-title">
          Image Full
        </h2>
        <p>Card with full image background.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
