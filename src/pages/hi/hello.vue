<script setup lang="ts">
definePage({
  meta: {
    title: 'hello',
    icon: 'i-mdi:account-group',
  },
})

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu-collective/vitesse" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="btn text-sm m-3"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
