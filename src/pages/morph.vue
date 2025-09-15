<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <div class="relative flex justify-center items-center bg-radial from-40% from-slate-200 to-slate-300 size-full">
    <Time class="size-full">
      <template #day>
        <MorphSymbol :symbol="time.day.value?.[0]" />
        <MorphSymbol :symbol="time.day.value?.[1]" />
      </template>
      <template #date-separator>
        <MorphSymbol symbol="dot" />
      </template>
      <template #date-time-separator>
        <MorphSymbol symbol="dash" />
      </template>
      <template #month>
        <MorphSymbol :symbol="time.month.value?.[0]" />
        <MorphSymbol :symbol="time.month.value?.[1]" />
      </template>
      <template #year>
        <MorphSymbol :symbol="time.year.value?.[0]" />
        <MorphSymbol :symbol="time.year.value?.[1]" />
        <MorphSymbol :symbol="time.year.value?.[2]" />
        <MorphSymbol :symbol="time.year.value?.[3]" />
      </template>
      <template #hour>
        <MorphSymbol :symbol="time.hour.value?.[0]" />
        <MorphSymbol :symbol="time.hour.value?.[1]" />
      </template>
      <template #time-separator>
        <MorphSymbol symbol="colon" />
      </template>
      <template #minute>
        <MorphSymbol :symbol="time.minute.value?.[0]" />
        <MorphSymbol :symbol="time.minute.value?.[1]" />
      </template>
      <template #second>
        <MorphSymbol :symbol="time.second.value?.[0]" />
        <MorphSymbol :symbol="time.second.value?.[1]" />
      </template>
    </Time>

    <Navigation>
      <template #back>
        <MorphSymbol symbol="arrowLeft" hover-animation />
      </template>
      <template #next>
        <MorphSymbol symbol="arrowRight" hover-animation />
      </template>
    </Navigation>
  </div>
</template>

<script setup lang="ts">
import ogImage from '../assets/morph.png'

definePage({
  meta: {
    order: 3,
  },
})

useSeoMeta({
  title: 'Morph Clock',
  description: 'A morph style clock and date display built with Vue 3 and Tailwind CSS.',
  ogTitle: 'Morph Clock',
  ogDescription: 'A morph style clock and date display built with Vue 3 and Tailwind CSS.',
  ogImage,
  ogUrl: 'https://time.wintersperger.dev/morph',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterTitle: 'Morph Clock',
  twitterDescription: 'A morph style clock and date display built with Vue 3 and Tailwind CSS.',
  twitterImage: ogImage,
  twitterCard: 'summary_large_image',
})

const time = useTime()
</script>
