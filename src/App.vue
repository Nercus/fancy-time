<template>
  <div class="relative flex flex-col justify-center items-center gap-2 px-4 w-full max-w-3xl min-h-screen padding-save">
    <div v-if="breakpoints.lg.value" class="flex flex-row justify-center items-center gap-2 w-fit">
      <SegmentDays />
      <DotNumber digit="dot" />
      <SegmentMonths />
      <DotNumber digit="dot" />
      <SegmentYears />
    </div>
    <div class="flex flex-row justify-center items-center gap-2 w-fit">
      <SegmentHours />
      <DotNumber digit="separator" />
      <SegmentMinutes />
      <DotNumber digit="separator" />
      <SegmentSeconds />
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { onMounted } from 'vue'
import DotNumber from './components/DotNumber.vue'
import SegmentDays from './components/SegmentDays.vue'
import SegmentHours from './components/SegmentHours.vue'
import SegmentMinutes from './components/SegmentMinutes.vue'

import SegmentMonths from './components/SegmentMonths.vue'
import SegmentSeconds from './components/SegmentSeconds.vue'
import SegmentYears from './components/SegmentYears.vue'
import { useRandomImage } from './composables/useRandomImage'

const { init } = useRandomImage()

onMounted(() => {
  init()
})

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>

<style scoped>
.padding-save {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}
</style>
