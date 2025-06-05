<template>
  <motion.div class="flex flex-col content-start max-w-[80px] max-h-[80px]" :animate="{ y }"
    :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
    <span
      class="flex justify-center items-center rounded min-w-[80px] min-h-[80px] font-semibold text-lg tracking-widest transition-opacity duration-250"
      v-for="(el, index) in props.elements" :key="el" :class="index === counter ? 'opacity-100' : 'opacity-70'">
      {{ el }}
    </span>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v"
import { ref, watch } from 'vue';

const props = defineProps<{
  elements: (number | string)[]
}>()

// height of each element is 40px, so 40 * 500 = 20000px
const height = 80
const y = ref(0);

const counter = defineModel<number>({
  type: Number,
  required: true,
})

watch(counter, (newValue) => {
  y.value = -(newValue * height);
}, { immediate: true })

</script>
