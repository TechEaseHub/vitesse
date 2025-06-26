<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
const showBottom = ref(false)
</script>

<template>
  <div class="space-y-4">
    <!-- 基础模态框（dialog） -->
    <button class="btn btn-primary" @click="showModal = true">
      Open Modal
    </button>
    <dialog v-if="showModal" open class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">
          Hello!
        </h3>
        <p class="py-4">
          This is a daisyUI modal example.
        </p>
        <div class="modal-action">
          <button class="btn" @click="showModal = false">
            Close
          </button>
        </div>
      </div>
    </dialog>

    <!-- 位置模态框 -->
    <button class="btn btn-secondary" @click="showBottom = true">
      Open Bottom Modal
    </button>
    <dialog v-if="showBottom" open class="modal modal-bottom">
      <div class="modal-box">
        <h3 class="text-lg font-bold">
          Bottom Modal
        </h3>
        <p class="py-4">
          This modal is at the bottom.
        </p>
        <div class="modal-action">
          <button class="btn" @click="showBottom = false">
            Close
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
