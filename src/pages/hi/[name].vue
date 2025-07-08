<script setup lang="ts">
definePage({
  meta: {
    title: 'HiName',
    icon: 'i-mdi:account-group',
    // layout: 'DefaultLayout',
  },
})

const params = useRoute('HiName').params
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>
      Hi, {{ params.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button btn text-sm m-3 mt-8 @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
