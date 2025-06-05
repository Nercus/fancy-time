<template>
  <TimeSegment :elements="elements" v-model="seconds" />
</template>

<script setup lang="ts">
import TimeSegment from './TimeSegment.vue';
import { useTimestamp } from '@vueuse/core';
import { ref } from 'vue';


const seconds = ref(1)
useTimestamp({
  callback: (ts) => {
    seconds.value = new Date(ts).getSeconds();
  }
});



const elements = Array.from({ length: 60 }, (_, i) => {
  // return i + 1 with leading zero start with 0
  // e.g. 00, 01, 02, ..., 59
  return String(i).padStart(2, '0');
});






</script>
