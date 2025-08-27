<template>
  <div class="flex flex-row gap-2">
    <DotNumber :digit="firstDigit" />
    <DotNumber :digit="secondDigit" />
    <DotNumber :digit="thirdDigit" />
    <DotNumber :digit="fourthDigit" />
  </div>
</template>

<script setup lang="ts">
import { useTimestamp } from '@vueuse/core'
import { computed, ref } from 'vue'
import DotNumber from './DotNumber.vue'

const year = ref(0)
useTimestamp({
  callback: (ts) => {
    year.value = new Date(ts).getFullYear()
  },
})

const firstDigit = computed(() => Math.floor(year.value / 1000))
const secondDigit = computed(() => Math.floor(year.value / 100) % 10)
const thirdDigit = computed(() => Math.floor(year.value / 10) % 10)
const fourthDigit = computed(() => year.value % 10)
</script>
