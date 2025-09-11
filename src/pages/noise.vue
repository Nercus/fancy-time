<template>
  <div class="flex justify-center items-center bg-gradient-to-br from-stone-200 to-stone-300 size-full">
    <Time class="size-full noise-bg">
      <template #day>
        <NoiseSymbol :symbol="time.day.value?.[0]" />
        <NoiseSymbol :symbol="time.day.value?.[1]" />
      </template>
      <template #date-separator>
        <NoiseSymbol symbol="." />
      </template>
      <template #date-time-separator>
        <NoiseSymbol symbol="-" />
      </template>
      <template #month>
        <NoiseSymbol :symbol="time.month.value?.[0]" />
        <NoiseSymbol :symbol="time.month.value?.[1]" />
      </template>
      <template #year>
        <NoiseSymbol :symbol="time.year.value?.[0]" />
        <NoiseSymbol :symbol="time.year.value?.[1]" />
        <NoiseSymbol :symbol="time.year.value?.[2]" />
        <NoiseSymbol :symbol="time.year.value?.[3]" />
      </template>
      <template #hour>
        <NoiseSymbol :symbol="time.hour.value?.[0]" />
        <NoiseSymbol :symbol="time.hour.value?.[1]" />
      </template>
      <template #time-separator>
        <NoiseSymbol symbol=":" />
      </template>
      <template #minute>
        <NoiseSymbol :symbol="time.minute.value?.[0]" />
        <NoiseSymbol :symbol="time.minute.value?.[1]" />
      </template>
      <template #second>
        <NoiseSymbol :symbol="time.second.value?.[0]" />
        <NoiseSymbol :symbol="time.second.value?.[1]" />
      </template>
    </Time>

    <Navigation>
      <template #back>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" class="opacity-30 hover:opacity-100 size-8 text-rose-800">
          <path
            fill="currentColor"
            d="m1.38 7.18l4.83-4.15c.7-.6 1.79-.1 1.79.82v8.29c0 .93-1.09 1.42-1.79.82L1.38 8.82c-.5-.43-.5-1.21 0-1.64" />
        </svg>
      </template>
      <template #next>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" class="opacity-30 hover:opacity-100 size-8 text-rose-800">
          <path
            fill="currentColor"
            d="M7.62 7.18L2.79 3.03c-.7-.6-1.79-.1-1.79.82v8.29c0 .93 1.09 1.42 1.79.82l4.83-4.14c.5-.43.5-1.21 0-1.64" />
        </svg>
      </template>
    </Navigation>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 2,
  },
})

const time = useTime()
</script>

<style lang="css" scoped>
.noise-bg {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDkyIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE1IiBzcGVjdWxhckNvbnN0YW50PSIwLjgiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzc5NTdBOCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogIAk8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAKPC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+PC9zdmc+');
  will-change: transform;
}
</style>
