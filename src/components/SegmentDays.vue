<template>
  <div class="flex flex-row gap-2">
    <DotNumber :digit="firstDigit" />
    <DotNumber :digit="secondDigit" />
  </div>
</template>

<script setup lang="ts">
import { useTimestamp } from '@vueuse/core'
import { computed, ref } from 'vue'
import DotNumber from './DotNumber.vue'

const day = ref(1)

useTimestamp({
  callback: (ts) => {
    const date = new Date(ts)
    day.value = date.getDate() - 1
  },
})

const firstDigit = computed(() => Math.floor(day.value / 10))
const secondDigit = computed(() => day.value % 10)
</script>
