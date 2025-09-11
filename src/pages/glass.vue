<template>
  <div
    class="flex flex-col flex-1 justify-center items-center gap-4 bg-gradient-to-r from-neutral-300 to-stone-400 w-full h-full min-h-dvh">
    <img src="../assets/vue.svg" alt="Vue logo" class="w-24 h-24">
    <h1 class="text-neutral-800 text-3xl tracking-wide">
      glass
    </h1>
    <Navigation />
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 3,
  },
})
</script>
