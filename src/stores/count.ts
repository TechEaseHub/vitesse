export const useCountStore = defineStore(
  'count',
  () => {
    const count = ref(Math.round(Math.random() * 20))

    function inc() {
      count.value += 1
    }
    function dec() {
      count.value -= 1
    }

    return {
      count,
      inc,
      dec,
    }
  },
  {
    persist: true,
  },
)
