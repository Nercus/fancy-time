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

const hours = ref(0)
useTimestamp({
  callback: (ts) => {
    hours.value = new Date(ts).getHours()
  },
})

const firstDigit = computed(() => Math.floor(hours.value / 10))
const secondDigit = computed(() => hours.value % 10)
</script>
