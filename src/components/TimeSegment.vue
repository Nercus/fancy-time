<template>
  <motion.div class="flex flex-col content-start" :class="{
    'max-w-[80px] max-h-[80px]': breakpoints.lg.value,
    'max-w-[50px] max-h-[50px]': !breakpoints.lg.value
  }" :animate="{ y }" :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
    <span
      class="flex justify-center items-center rounded font-semibold text-lg tracking-widest transition-opacity duration-250"
      v-for="(el, index) in props.elements" :key="el"
      :class="[index === counter ? 'opacity-100' : 'opacity-70', breakpoints.lg.value ? 'min-w-[80px] min-h-[80px]' : 'min-w-[50px] min-h-[50px]']">
      {{ el }}
    </span>
  </motion.div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { motion } from "motion-v"
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  elements: (number | string)[]
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
// height of each element is 40px, so 40 * 500 = 20000px
const height = computed(() => {
  return breakpoints.lg.value ? 80 : 50;
});
const y = ref(0);

const counter = defineModel<number>({
  type: Number,
  required: true,
})

watch(counter, (newValue) => {
  y.value = -(newValue * height.value);
}, { immediate: true })

</script>
