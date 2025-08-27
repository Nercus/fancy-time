<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <motion.div
    :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }"
    :animate="{ scale }"
    :while-hover="{ scale: 0.95 }"
    class="size-8 sm:size-12 md:size-14 lg:size-20 2xl:size-36 xl:size-28 aspect-square">
    <canvas
      ref="canvasRef"
      class="block bg-slate-200/80 shadow backdrop-blur-xs p-2 md:p-4 pseudo-border border-slate-200/90 border-r-2 border-b-6 rounded w-full h-auto aspect-square" />
  </motion.div>
</template>

<script setup lang="ts">
import type { DotSymbols } from '../composables/useDots'
import { motion } from 'motion-v'
import { computed, ref, watch } from 'vue'
import { useDots } from '../composables/useDots'
import { useRandomImage } from '../composables/useRandomImage'

const props = defineProps<{ digit: DotSymbols }>()

const { dominantColor } = useRandomImage()
const { getGridSize, getPattern } = useDots()

const scale = ref(1)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const gridSize = getGridSize()
const totalDots = gridSize * gridSize
const canvasSize = ref(104)
const dotGap = computed(() => -1)
const dotSize = computed(() => (canvasSize.value - dotGap.value * (gridSize + 1)) / gridSize)

const drawStep = ref(totalDots)
let animationFrame: number | null = null

function drawCanvas(step = totalDots) {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = canvasSize.value
  canvas.height = canvasSize.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvasSize.value, canvasSize.value)
  const pattern = getPattern(props.digit)
  if (!pattern) return

  const dotColor = dominantColor.value
  if (!dotColor) return

  let dotCount = 0
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = dotGap.value + col * (dotSize.value + dotGap.value)
      const y = dotGap.value + row * (dotSize.value + dotGap.value)
      const isActive = pattern[row]?.[col] === 1 && dotCount < step
      ctx.beginPath()
      ctx.fillStyle = isActive ? dotColor : 'transparent'
      ctx.shadowColor = isActive ? '#0002' : 'transparent'
      ctx.shadowBlur = isActive ? 2 : 0
      ctx.globalAlpha = isActive ? 1 : 0.7
      if (isActive) ctx.fillRect(x, y, dotSize.value, dotSize.value)
      ctx.closePath()
      dotCount += pattern[row]?.[col] === 1 ? 1 : 0
    }
  }
}

function animateDrawStep() {
  if (drawStep.value < totalDots) {
    drawStep.value += 2
    drawCanvas(drawStep.value)
    animationFrame = requestAnimationFrame(animateDrawStep)
  }
  else {
    drawCanvas(totalDots)
    animationFrame = null
  }
}

const initialDraw = ref(true)
function startDrawing() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  drawStep.value = 0
  if (initialDraw.value) {
    drawStep.value = totalDots
    drawCanvas(totalDots)
    initialDraw.value = false
    return
  }
  scale.value = 1.05
  setTimeout(() => scale.value = 1, 500)
  animateDrawStep()
}

watch([() => props.digit, () => dominantColor.value], (newVal, oldVal) => {
  if (newVal[0] !== null && newVal[1] !== null && newVal !== oldVal) startDrawing()
}, { immediate: true })
</script>

<style lang="css">
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
</style>
