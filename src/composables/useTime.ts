const year = ref<number[]>()
const month = ref<number[]>()
const day = ref<number[]>()
const hour = ref<number[]>()
const minute = ref<number[]>()
const second = ref<number[]>()

const ts = useTimestamp({ interval: 1000 })

export function useTime() {
  function splitNumber(num: number, length = 2) {
    return num.toString().padStart(length, '0').split('').map(Number)
  }

  watch(ts, (newTs) => {
    const date = new Date(newTs)
    year.value = splitNumber(date.getFullYear(), 4)
    month.value = splitNumber(date.getMonth() + 1)
    day.value = splitNumber(date.getDate())
    hour.value = splitNumber(date.getHours())
    minute.value = splitNumber(date.getMinutes())
    second.value = splitNumber(date.getSeconds())
  }, { immediate: true })
  return { year, month, day, hour, minute, second }
}
