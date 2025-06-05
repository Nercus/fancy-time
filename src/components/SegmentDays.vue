<template>
  <TimeSegment :elements="elements" v-model="day" />
</template>

<script setup lang="ts">
import TimeSegment from './TimeSegment.vue';
import { useTimestamp } from '@vueuse/core';
import { ref, computed } from 'vue';

const day = ref(1);
const month = ref(0);
const year = ref(1970);

useTimestamp({
  callback: (ts) => {
    const date = new Date(ts);
    day.value = date.getDate() - 1;
    month.value = date.getMonth();
    year.value = date.getFullYear();
  }
});

// Compute the number of days in the current month/year
const maxDays = computed(() => {
  return new Date(year.value, month.value + 1, 0).getDate();
});

// Elements: 01, 02, ..., maxDays
const elements = computed(() =>
  Array.from({ length: maxDays.value }, (_, i) => String(i + 1).padStart(2, '0'))
);
</script>
