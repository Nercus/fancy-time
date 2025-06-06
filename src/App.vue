<template>
  <div class="relative flex flex-col justify-center items-center px-4 w-full min-h-screen padding-save">
    <div
      class="flex flex-row justify-evenly items-center gap-10 shadow px-4 pseudo-border border-r-2 border-b-6 border-black/5 w-full min-w-fit max-w-md overflow-visible glass"
      :class="{
        'h-[80px]': breakpoints.lg.value,
        'h-[50px]': !breakpoints.lg.value
      }">
      <SegmentDays v-if="breakpoints.lg.value" />
      <span v-if="breakpoints.lg.value">.</span>
      <SegmentMonths v-if="breakpoints.lg.value" />
      <span v-if="breakpoints.lg.value">.</span>
      <SegmentYears v-if="breakpoints.lg.value" />
      <span v-if="breakpoints.lg.value">-</span>
      <SegmentHours />
      <span>:</span>
      <SegmentMinutes />
      <span>:</span>
      <SegmentSeconds />
    </div>

  </div>
</template>

<script setup lang="ts">
import SegmentSeconds from './components/SegmentSeconds.vue';
import SegmentMinutes from './components/SegmentMinutes.vue';
import SegmentHours from './components/SegmentHours.vue';
import SegmentDays from './components/SegmentDays.vue';
import SegmentMonths from './components/SegmentMonths.vue';
import SegmentYears from './components/SegmentYears.vue';

import { useRandomImage } from './composables/randomImage';
import { onMounted } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'


const { setRandomImage } = useRandomImage()

onMounted(() => {
  setRandomImage();
});

const breakpoints = useBreakpoints(breakpointsTailwind)

</script>



<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.51);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.4px);
  -webkit-backdrop-filter: blur(2.4px);
}

.pseudo-border:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.padding-save {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}
</style>
