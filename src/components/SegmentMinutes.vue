<template>
  <TimeSegment :elements="elements" v-model="minutes" />
</template>

<script setup lang="ts">
import TimeSegment from './TimeSegment.vue';
import { useTimestamp } from '@vueuse/core';
import { ref } from 'vue';

const minutes = ref(0)
useTimestamp({
  callback: (ts) => {
    minutes.value = new Date(ts).getMinutes();
  }
});

const elements = Array.from({ length: 60 }, (_, i) => {
  // return i with leading zero, e.g. 00, 01, ..., 59
  return String(i).padStart(2, '0');
});
</script>
