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

const minutes = ref(0)
useTimestamp({
  callback: (ts) => {
    minutes.value = new Date(ts).getMinutes()
  },
})

const firstDigit = computed(() => Math.floor(minutes.value / 10))
const secondDigit = computed(() => minutes.value % 10)
</script>
