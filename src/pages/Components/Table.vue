<script lang="ts" setup>

</script>

<template>
  <div class="space-y-4">
    <!-- 基础表格 -->
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane</td>
            <td>Developer</td>
            <td>Blue</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Designer</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Zebra 表格 -->
    <div class="mt-4 overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Jane</td>
            <td>Developer</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>John</td>
            <td>Designer</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
