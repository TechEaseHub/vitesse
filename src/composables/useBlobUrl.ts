import { onBeforeUnmount, ref, type Ref, watch } from 'vue'

/**
 * 将 Blob 响应式地转换为 URL，并自动释放旧的 blob URL。
 * @param blobRef 响应式的 Blob 对象
 * @returns 响应式 URL 字符串
 */
export function useBlobUrl(blobRef: Ref<Blob | null | undefined>) {
  const url = ref('')

  // 监控 blobRef 的变化，自动创建 blob URL
  watch(blobRef, (newBlob) => {
    // 清除旧 URL
    if (url.value) {
      URL.revokeObjectURL(url.value)
      url.value = ''
    }

    // 创建新 URL
    if (newBlob) {
      url.value = URL.createObjectURL(newBlob)
    }
  })

  // 卸载时清理资源
  onBeforeUnmount(() => {
    console.log('卸载了')

    if (url.value) {
      URL.revokeObjectURL(url.value)
    }
  })

  return url
}
