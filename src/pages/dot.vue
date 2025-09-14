<template>
  <div class="relative flex justify-center items-center bg-black size-full">
    <Time>
      <template #day>
        <DotSymbol :symbol="time.day.value?.[0]" />
        <DotSymbol :symbol="time.day.value?.[1]" />
      </template>
      <template #date-separator>
        <DotSymbol symbol="dot" />
      </template>
      <template #date-time-separator>
        <DotSymbol symbol="dash" />
      </template>
      <template #month>
        <DotSymbol :symbol="time.month.value?.[0]" />
        <DotSymbol :symbol="time.month.value?.[1]" />
      </template>
      <template #year>
        <DotSymbol :symbol="time.year.value?.[0]" />
        <DotSymbol :symbol="time.year.value?.[1]" />
        <DotSymbol :symbol="time.year.value?.[2]" />
        <DotSymbol :symbol="time.year.value?.[3]" />
      </template>
      <template #hour>
        <DotSymbol :symbol="time.hour.value?.[0]" />
        <DotSymbol :symbol="time.hour.value?.[1]" />
      </template>
      <template #time-separator>
        <DotSymbol symbol="colon" />
      </template>
      <template #minute>
        <DotSymbol :symbol="time.minute.value?.[0]" />
        <DotSymbol :symbol="time.minute.value?.[1]" />
      </template>
      <template #second>
        <DotSymbol :symbol="time.second.value?.[0]" />
        <DotSymbol :symbol="time.second.value?.[1]" />
      </template>
    </Time>

    <Navigation>
      <template #back>
        <DotSymbol symbol="arrowLeft" hover-animation />
      </template>
      <template #next>
        <DotSymbol symbol="arrowRight" hover-animation />
      </template>
    </Navigation>
  </div>
</template>

<script setup lang="ts">
import ogImage from '../assets/dots.png'

definePage({
  meta: {
    order: 1,
  },
})
useSeoMeta({
  title: 'Dots Clock',
  description: 'A dots style clock and date display built with Vue 3 and Tailwind CSS.',
  ogTitle: 'Dots Clock',
  ogDescription: 'A dots style clock and date display built with Vue 3 and Tailwind CSS.',
  ogImage,
  ogUrl: 'https://time.wintersperger.dev/dot',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterTitle: 'Dots Clock',
  twitterDescription: 'A dots style clock and date display built with Vue 3 and Tailwind CSS.',
  twitterImage: ogImage,
  twitterCard: 'summary_large_image',
})

const time = useTime()
</script>
