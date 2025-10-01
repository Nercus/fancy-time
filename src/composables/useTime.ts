const year = ref<number[]>()
const month = ref<number[]>()
const day = ref<number[]>()
const hour = ref<number[]>()
const minute = ref<number[]>()
const second = ref<number[]>()
const currentDate = ref(new Date())

const ts = useTimestamp({ interval: 1000 })

export function useTime() {
  function splitNumber(num: number, length = 2) {
    return num.toString().padStart(length, '0').split('').map(Number)
  }

  watch(ts, (newTs) => {
    currentDate.value = new Date(newTs)
    year.value = splitNumber(currentDate.value.getFullYear(), 4)
    month.value = splitNumber(currentDate.value.getMonth() + 1)
    day.value = splitNumber(currentDate.value.getDate())
    hour.value = splitNumber(currentDate.value.getHours())
    minute.value = splitNumber(currentDate.value.getMinutes())
    second.value = splitNumber(currentDate.value.getSeconds())
  }, { immediate: true })
  return { year, month, day, hour, minute, second, currentDate }
}
