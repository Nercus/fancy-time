<template>
  <div class="relative flex justify-center items-center bg-radial from-40% from-zinc-700 to-zinc-950 size-full">
    <Time class="size-full noise-bg">
      <template #day>
        <CubeSymbol :symbol="time.day.value?.[0]" />
        <CubeSymbol :symbol="time.day.value?.[1]" />
      </template>
      <template #date-separator>
        <CubeSymbol symbol="dot" />
      </template>
      <template #date-time-separator>
        <CubeSymbol symbol="dash" />
      </template>
      <template #month>
        <CubeSymbol :symbol="time.month.value?.[0]" />
        <CubeSymbol :symbol="time.month.value?.[1]" />
      </template>
      <template #year>
        <CubeSymbol :symbol="time.year.value?.[0]" />
        <CubeSymbol :symbol="time.year.value?.[1]" />
        <CubeSymbol :symbol="time.year.value?.[2]" />
        <CubeSymbol :symbol="time.year.value?.[3]" />
      </template>
      <template #hour>
        <CubeSymbol :symbol="time.hour.value?.[0]" />
        <CubeSymbol :symbol="time.hour.value?.[1]" />
      </template>
      <template #time-separator>
        <CubeSymbol symbol="colon" />
      </template>
      <template #minute>
        <CubeSymbol :symbol="time.minute.value?.[0]" />
        <CubeSymbol :symbol="time.minute.value?.[1]" />
      </template>
      <template #second>
        <CubeSymbol :symbol="time.second.value?.[0]" />
        <CubeSymbol :symbol="time.second.value?.[1]" />
      </template>
    </Time>

    <Navigation>
      <template #back>
        <CubeSymbol symbol="arrowLeft" hover-animation />
      </template>
      <template #next>
        <CubeSymbol symbol="arrowRight" hover-animation />
      </template>
    </Navigation>
  </div>
</template>

<script setup lang="ts">
import ogImage from '../assets/cube.png'

definePage({
  meta: {
    order: 4,
  },
})

useSeoMeta({
  title: 'Cube Clock',
  description: 'A cube style clock and date display built with Vue 3 and Tailwind CSS.',
  ogTitle: 'Cube Clock',
  ogDescription: 'A cube style clock and date display built with Vue 3 and Tailwind CSS.',
  ogImage,
  ogUrl: 'https://time.wintersperger.dev/cube',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterTitle: 'Cube Clock',
  twitterDescription: 'A cube style clock and date display built with Vue 3 and Tailwind CSS.',
  twitterImage: ogImage,
  twitterCard: 'summary_large_image',
})

const time = useTime()
</script>
