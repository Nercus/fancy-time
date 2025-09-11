<template>
  <div
    class="relative flex justify-center items-center bg-white size-full">
    <Time>
      <template #day>
        <DrawnSymbol :symbol="time.day.value?.[0]" />
        <DrawnSymbol :symbol="time.day.value?.[1]" />
      </template>
      <template #date-separator>
        <DrawnSymbol symbol="dot" />
      </template>
      <template #date-time-separator>
        <DrawnSymbol symbol="dash" />
      </template>
      <template #month>
        <DrawnSymbol :symbol="time.month.value?.[0]" />
        <DrawnSymbol :symbol="time.month.value?.[1]" />
      </template>
      <template #year>
        <DrawnSymbol :symbol="time.year.value?.[0]" />
        <DrawnSymbol :symbol="time.year.value?.[1]" />
        <DrawnSymbol :symbol="time.year.value?.[2]" />
        <DrawnSymbol :symbol="time.year.value?.[3]" />
      </template>
      <template #hour>
        <DrawnSymbol :symbol="time.hour.value?.[0]" />
        <DrawnSymbol :symbol="time.hour.value?.[1]" />
      </template>
      <template #time-separator>
        <DrawnSymbol symbol="colon" />
      </template>
      <template #minute>
        <DrawnSymbol :symbol="time.minute.value?.[0]" />
        <DrawnSymbol :symbol="time.minute.value?.[1]" />
      </template>
      <template #second>
        <DrawnSymbol :symbol="time.second.value?.[0]" />
        <DrawnSymbol :symbol="time.second.value?.[1]" />
      </template>
    </Time>

    <Navigation>
      <template #back>
        <DrawnSymbol symbol="arrowLeft" hover-animation />
      </template>
      <template #next>
        <DrawnSymbol symbol="arrowRight" hover-animation />
      </template>
    </Navigation>
  </div>
</template>

<script setup lang="ts">
import ogImage from '../assets/handdrawn.png'

definePage({
  meta: {
    order: 0,
  },
})

useSeoMeta({
  title: 'Hand-Drawn Clock',
  description: 'A hand-drawn style clock and date display built with Vue 3 and Tailwind CSS.',
  ogTitle: 'Hand-Drawn Clock',
  ogDescription: 'A hand-drawn style clock and date display built with Vue 3 and Tailwind CSS.',
  ogImage,
  ogUrl: window.location.href,
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
})

const time = useTime()
</script>
