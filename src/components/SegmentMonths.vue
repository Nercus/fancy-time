<template>
  <TimeSegment :elements="elements" v-model="month" />
</template>

<script setup lang="ts">
import TimeSegment from './TimeSegment.vue';
import { useTimestamp } from '@vueuse/core';
import { ref } from 'vue';

const month = ref(0);
useTimestamp({
  callback: (ts) => {
    month.value = new Date(ts).getMonth();
  }
});

// Months: 01, 02, ..., 12
const elements = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
</script>
