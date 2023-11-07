<script setup lang="ts">
import { axisZEnum } from '@/enums/axisZEnum'
import { useViewStore } from '@/store/useViewStore'

const viewStore = useViewStore()
const messageTypeCode = computed(() => viewStore.axisZ)

type TProps = {
  astrounatMovement: () => void;
};

const { astrounatMovement } = defineProps<TProps>();
</script>

<template>
  <SwipperPlanet />

  <section
    v-if="messageTypeCode > axisZEnum.webStack"
    class="hidden sm:flex info-2 centerDiv flex-col items-center gap-2 text-white text-2xl font-semibold"
  >
    <p class="text-center">This project still in development, but press space to begin your journey</p>
    <p>To move the astronaut press</p>
    <div class="flex items-center gap-2">
      <img class="w-12" src="@/assets/jpg/w_keyboard.jpg" alt="arrow" />
      <span>or </span>
      <img class="w-12" src="@/assets/jpg/s_keyboard.jpg" alt="arrow" />
    </div>
  </section>

  <section
    v-if="messageTypeCode > axisZEnum.webStack && astrounatMovement"
    class="z-30 flex flex-col items-center gap-4 h-[60vh] sm:hidden"
  >
    <p class="text-white text-2xl">Hello, click below to begin</p>

    <button class="w-24 h-24 flex items-center justify-center rounded-full" @click="astrounatMovement"
      style="pointer-events: visible"
    >
      <div class="w-12 h-12 bg-zinc-50 rounded-full animate-ping"></div>
    </button>
  </section>

  <div
    style="pointer-events: visible"
    v-if="
      messageTypeCode < axisZEnum.webStack &&
      messageTypeCode > axisZEnum.projects
    "
    class="fadeIn w-full h-full"
  >
    <AboutMe />
  </div>

  <section
    v-if="messageTypeCode < axisZEnum.projects && messageTypeCode > -2000"
    class="info-2 centerDiv flex flex-col items-center gap-2"
  >
    <Carousel />
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.centerDiv {
  animation: fadeIn 1s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fadeIn {
  animation: fadeIn 1s;
}
</style>
