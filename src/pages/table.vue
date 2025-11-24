<script setup lang="ts">
import { getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import { ref } from 'vue'

const columns = [
  { id: 'name', header: '姓名', accessorKey: 'name' },
  { id: 'age', header: '年龄', accessorKey: 'age' },
  { id: 'position', header: '职位', accessorKey: 'position' },
]

const data = ref([
  { name: '张三', age: 28, position: '开发工程师' },
  { name: '李四', age: 32, position: '产品经理' },
  { name: '王五', age: 25, position: '设计师' },
])

const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div p="4">
    <table w="full" border="~ gray-200" rounded="md" shadow="sm" table="auto" text="left">
      <thead bg="gray-100">
        <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <th v-for="header in headerGroup.headers" :key="header.id" :colspan="header.colSpan" px="4" py="2" text="sm gray-700" font="semibold" border-b border="gray-200">
            {{ header.isPlaceholder ? '' : header.column.columnDef.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in table.getRowModel().rows"
          :key="row.id"
          transition="colors"
          even:bg="gray-50"
          hover:bg="gray-100"
        >
          <td v-for="cell in row.getVisibleCells()" :key="cell.id" px="4" py="2" text="sm" border-b border="gray-100">
            {{ cell.getValue() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
