<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="size-20">
    <svg class="fill-blue-900" v-html="svgPath"></svg>
  </div>
</template>

<script setup lang="ts">
import { interpolate } from 'polymorph-js'

import Zero from '../assets/svgs/0.svg?raw'
import One from '../assets/svgs/1.svg?raw'
import Two from '../assets/svgs/2.svg?raw'
import Three from '../assets/svgs/3.svg?raw'
import Four from '../assets/svgs/4.svg?raw'
import Five from '../assets/svgs/5.svg?raw'
import Six from '../assets/svgs/6.svg?raw'
import Seven from '../assets/svgs/7.svg?raw'
import Eight from '../assets/svgs/8.svg?raw'
import Nine from '../assets/svgs/9.svg?raw'
import arrowLeft from '../assets/svgs/arrowLeft.svg?raw'
import arrowRight from '../assets/svgs/arrowRight.svg?raw'
import colon from '../assets/svgs/colon.svg?raw'
import dash from '../assets/svgs/dash.svg?raw'
import dot from '../assets/svgs/dot.svg?raw'

const props = defineProps<{
  symbol: string | number | undefined
  hoverAnimation?: boolean
}>()

const svgMap: Record<SymbolTypes, string> = {
  0: Zero,
  1: One,
  2: Two,
  3: Three,
  4: Four,
  5: Five,
  6: Six,
  7: Seven,
  8: Eight,
  9: Nine,
  arrowLeft,
  arrowRight,
  colon,
  dash,
  dot,
}

const newPath = computed(() => {
  return svgMap[props.symbol as SymbolTypes] || null
})

function getPathFromSvg(svg: string) {
  const pathMatch = svg.match(/<path[^>]*d="([^"]*)"/)
  return pathMatch ? pathMatch[1] : null
}

const svgPath = ref<string | null>(getPathFromSvg(newPath.value || ''))

watch(newPath, (newValue, oldValue) => {
  if (newValue && oldValue) {
    const oldPath = getPathFromSvg(oldValue)
    const newPath = getPathFromSvg(newValue)

    if (oldPath && newPath) {
      const morph = interpolate([oldPath, newPath])
      let progress = 0
      const duration = 500 // Animation duration in milliseconds
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        progress = Math.max(0, Math.min(elapsed / duration, 1)) // Clamp progress to [0, 1]

        svgPath.value = `<path d="${morph(progress)}" />`

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
    return
  }

  if (newValue) {
    svgPath.value = `<path d="${getPathFromSvg(newValue)}" />`
  }
  else {
    svgPath.value = null
  }
}, { immediate: true })
</script>
