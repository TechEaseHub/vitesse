<script setup lang="ts">
import type { ChangeCaseType } from '@vueuse/integrations/useChangeCase'
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import * as ChangeCase from 'change-case'
import { shallowRef } from 'vue'

definePage({
  meta: {
    title: 'ChangeCase',
  },
})

const transforms: any = Object.keys(ChangeCase).filter(v => v.endsWith('Case'))
const input = shallowRef('helloWorld')
const type = shallowRef<ChangeCaseType>(transforms[0])
const changeCase = useChangeCase(input, type)
</script>

<template>
  <div class="bg-primary-100 flex flex-wrap gap-2">
    <label v-for="item in transforms" :key="item" class="mb-2 p-2 border flex cursor-pointer items-center hover:bg-gray-100">
      <input v-model="type" :value="item" type="radio" class="mr-2 accent-green-500">
      <span>{{ item }}</span>
    </label>
  </div>

  <input v-model="input" type="text" class="text-lg mt-4 p-2 border border-gray-300 rounded-md bg-gray-50 w-full focus:outline-none focus:border-green-500 focus:bg-white">

  <pre class="mt-4 p-4 rounded-md bg-gray-100 whitespace-pre-wrap break-words">{{ changeCase }}</pre>
</template>
