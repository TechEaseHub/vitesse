<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础菜单 -->
    <ul class="bg-base-200 w-56 menu rounded-box">
      <li><button>Menu Item 1</button></li>
      <li><button>Menu Item 2</button></li>
    </ul>

    <!-- 水平菜单 -->
    <ul class="bg-base-200 mt-4 menu menu-horizontal rounded-box">
      <li><button>Horizontal 1</button></li>
      <li><button>Horizontal 2</button></li>
    </ul>

    <!-- 菜单标题和子菜单 -->
    <ul class="bg-base-200 mt-4 w-56 menu rounded-box">
      <li class="menu-title">
        Main
      </li>
      <li><button>Dashboard</button></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul>
            <li><button>Submenu 1</button></li>
            <li><button>Submenu 2</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
