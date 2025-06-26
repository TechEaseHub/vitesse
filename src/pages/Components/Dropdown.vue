<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础下拉菜单（CSS焦点） -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn">
        Dropdown
      </div>
      <ul tabindex="0" class="bg-base-100 p-2 w-52 shadow menu dropdown-content rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

    <!-- 位置下拉菜单 -->
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn">
        End
      </div>
      <ul tabindex="0" class="bg-base-100 p-2 w-52 shadow menu dropdown-content rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

    <!-- 悬停下拉菜单 -->
    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn">
        Hover
      </div>
      <ul tabindex="0" class="bg-base-100 p-2 w-52 shadow menu dropdown-content rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
