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

const seconds = ref(1)
useTimestamp({
  callback: (ts) => {
    seconds.value = new Date(ts).getSeconds()
  },
})

const firstDigit = computed(() => Math.floor(seconds.value / 10))
const secondDigit = computed(() => seconds.value % 10)
</script>
