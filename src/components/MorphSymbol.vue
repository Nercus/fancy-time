<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="size-16" :class="{ 'overflow-hidden': Number.isNaN(Number(props.symbol)) }" @mouseenter="props.hoverAnimation ? resetFilter() : null">
    <div class="relative w-fit font-mono text-center svg-filter">
      <span ref="text1" class="inline-block absolute w-full font-extrabold text-amber-700 text-6xl text-center subpixel-antialiased select-none" :class="currentColor">{{ previousSymbol }}</span>
      <span ref="text2" class="inline-block absolute w-full font-extrabold text-amber-700 text-6xl text-center subpixel-antialiased select-none" :class="currentColor">{{ currentSymbol }}</span>
    </div>

    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix
            in="SourceGraphic" type="matrix" values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -50" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  symbol: string | number | undefined
  hoverAnimation?: boolean
}>()

const symbols = {
  0: { symbol: '0', color: 'text-red-600' },
  1: { symbol: '1', color: 'text-amber-600' },
  2: { symbol: '2', color: 'text-yellow-600' },
  3: { symbol: '3', color: 'text-green-600' },
  4: { symbol: '4', color: 'text-teal-600' },
  5: { symbol: '5', color: 'text-sky-600' },
  6: { symbol: '6', color: 'text-indigo-600' },
  7: { symbol: '7', color: 'text-violet-600' },
  8: { symbol: '8', color: 'text-fuchsia-600' },
  9: { symbol: '9', color: 'text-pink-600' },
  dot: { symbol: '.', color: 'text-slate-600' },
  dash: { symbol: '-', color: 'text-slate-600' },
  colon: { symbol: ':', color: 'text-slate-600' },
  arrowLeft: { symbol: '<', color: 'text-sky-800' },
  arrowRight: { symbol: '>', color: 'text-sky-800' },
} as const

const currentSymbol = computed(() => {
  return symbols[props.symbol as keyof typeof symbols]?.symbol || null
})

const currentColor = computed(() => {
  return symbols[props.symbol as keyof typeof symbols]?.color || 'text-slate-600'
})

const morphTime = 0.75
let morph = 0

const previousSymbol = shallowRef<string | null>(null)
watch(currentSymbol, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    morph = 0
  }
  if (oldVal === null) {
    previousSymbol.value = currentSymbol.value
    return
  }
  previousSymbol.value = oldVal
})

const text1 = useTemplateRef('text1')
const text2 = useTemplateRef('text2')

function doMorph() {
  morph += 0.01
  let fraction = morph / morphTime

  if (fraction > 1) {
    fraction = 1
  }

  setMorph(fraction)
}

function setMorph(fraction: number) {
  // inspired by https://codepen.io/Valgo/pen/PowZaNY
  if (!text1.value || !text2.value) return
  text2.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
  text2.value.style.opacity = `${fraction ** 0.4 * 100}%`

  fraction = 1 - fraction
  text1.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
  text1.value.style.opacity = `${fraction ** 0.4 * 100}%`
}

function resetFilter() {
  morph = 0
  if (!text1.value || !text2.value) return
  text2.value.style.filter = ''
  text2.value.style.opacity = '100%'

  text1.value.style.filter = ''
  text1.value.style.opacity = '0%'
}

function animate() {
  requestAnimationFrame(animate)
  if (currentSymbol.value !== previousSymbol.value) {
    doMorph()
  }
  else {
    resetFilter()
  }
}

onMounted(() => {
  animate()
})
</script>

<style scoped>
.svg-filter {
  filter: url(#threshold) blur(0.1px);
}
</style>
