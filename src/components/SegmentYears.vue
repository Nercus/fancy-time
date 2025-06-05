<template>
  <TimeSegment :elements="elements" v-model="yearIndex" />
</template>

<script setup lang="ts">
import TimeSegment from './TimeSegment.vue';
import { useTimestamp } from '@vueuse/core';
import { ref } from 'vue';

// Define a range of years, e.g., 1970 to 2070
const startYear = 1970;
const endYear = 2070;
const elements = Array.from({ length: endYear - startYear + 1 }, (_, i) => String(startYear + i));

// The index of the current year in the elements array
const yearIndex = ref(0);

useTimestamp({
  callback: (ts) => {
    const currentYear = new Date(ts).getFullYear();
    yearIndex.value = Math.max(0, Math.min(currentYear - startYear, elements.length - 1));
  }
});
</script>
