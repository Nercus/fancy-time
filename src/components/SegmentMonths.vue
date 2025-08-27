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

const month = ref(0)
useTimestamp({
  callback: (ts) => {
    month.value = new Date(ts).getMonth() + 1
  },
})

const firstDigit = computed(() => Math.floor(month.value / 10))
const secondDigit = computed(() => month.value % 10)
</script>
