<template>
  <RouterView v-slot="{ Component }">
    <Transition :name="transitionName" :mode="transitionMode">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { isSmallerOrEqual } = useBreakpoints(breakpointsTailwind)
const route = useRoute()
const router = useRouter()
const transitionName = ref('slide-forward')
const transitionMode = ref<'default' | 'out-in'>('default')

let previousOrder = route.meta.order || 0

watch(route, (newRoute) => {
  const routes = router.getRoutes()
  const maxOrder = Math.max(...routes.map(r => (r.meta.order as number) ?? 0))
  const currentOrder = newRoute.meta.order || 0

  if (isSmallerOrEqual('sm')) {
    transitionName.value = 'fade'
    transitionMode.value = 'out-in'
    previousOrder = currentOrder
    return
  }

  transitionMode.value = 'default'
  if (currentOrder === 0 && previousOrder === maxOrder) {
    // Wrap-around: last to first (forward)
    transitionName.value = 'slide-forward'
  }
  else if (currentOrder === maxOrder && previousOrder === 0) {
    // Wrap-around: first to last (backward)
    transitionName.value = 'slide-backward'
  }
  else if (currentOrder > previousOrder) {
    transitionName.value = 'slide-forward'
  }
  else {
    transitionName.value = 'slide-backward'
  }

  previousOrder = currentOrder
})
</script>

<style scoped>
.slide-forward-enter-active,
.slide-forward-leave-active {
  transition: all 0.75s ease-out;
}

.slide-forward-enter-from {
  position: absolute;
  right: -100%;
}

.slide-forward-enter-to {
  position: absolute;
  right: 0;
}

.slide-forward-leave-from {
  position: absolute;
  left: 0;
}

.slide-forward-leave-to {
  position: absolute;
  left: -100%;
}

.slide-backward-enter-active,
.slide-backward-leave-active {
  transition: all 0.75s ease-out;
}

.slide-backward-enter-from {
  position: absolute;
  left: -100%;
}

.slide-backward-enter-to {
  position: absolute;
  left: 0;
}

.slide-backward-leave-from {
  position: absolute;
  right: 0;
}

.slide-backward-leave-to {
  position: absolute;
  right: -100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
