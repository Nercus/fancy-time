<template>
  <TimeSegment :elements="elements" v-model="hours" />
</template>

<script setup lang="ts">
import TimeSegment from './TimeSegment.vue';
import { useTimestamp } from '@vueuse/core';
import { ref } from 'vue';

const hours = ref(0)
useTimestamp({
  callback: (ts) => {
    hours.value = new Date(ts).getHours();
  }
});

// 24-hour format: 00, 01, ..., 23
const elements = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
</script>
