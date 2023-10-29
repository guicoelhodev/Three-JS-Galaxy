<script setup lang="ts">
import { axisZEnum } from '@/enums/axisZEnum'
import { useViewStore } from '@/store/useViewStore'

const viewStore = useViewStore()
const messageTypeCode = computed(() => viewStore.axisZ)
</script>

<template>
  <SwipperPlanet />
  <section
    v-if="messageTypeCode > axisZEnum.webStack"
    class="info-2 centerDiv flex flex-col items-center gap-2 text-white text-2xl font-semibold"
  >
    <p>To move the astronaut press</p>
    <div class="flex items-center gap-2">
      <img class="w-12" src="@/assets/jpg/w_keyboard.jpg" alt="arrow" />
      <span>or </span>
      <img class="w-12" src="@/assets/jpg/s_keyboard.jpg" alt="arrow" />
    </div>
  </section>

  <section
    v-if="
      messageTypeCode < axisZEnum.webStack &&
      messageTypeCode > axisZEnum.projects
    "
    class="info-2 centerDiv flex flex-col items-center gap-2"
  >
    <AxisZMessageStacks />
  </section>

  <section
    v-if="messageTypeCode < axisZEnum.projects && messageTypeCode > -2000"
    class="info-2 centerDiv flex flex-col items-center gap-2"
  >
    <!-- <AxisZMessageProjects /> -->
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
</style>
