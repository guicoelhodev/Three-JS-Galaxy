<script setup lang="ts">
import { axisZEnum } from '@/enums/axisZEnum'
import { useViewStore } from '@/store/useViewStore';

const viewStore = useViewStore();
const messageTypeCode = viewStore.axisZ;


onMounted(() => {
  console.log(viewStore.axisZ);
});
</script>

<template>

  <!-- <section v-if="messageTypeCode === axisZEnum.moveText" class="info-1 centerDiv">
    <p class="text-white text-3xl">Move text</p>
  </section> -->

  <!-- <section class="info-1 centerDiv">
    <article
      id="space_container"
      class="flex flex-col items-center justify-center gap-2"
    >
      <p class="text-white text-3xl">Press space to begin</p>
      <Icon icon="tabler:space" color="white" width="68" height="68" />
    </article>
  </section> -->
  <section v-if=" messageTypeCode > axisZEnum.webStack" class="info-2 centerDiv flex flex-col items-center gap-2">
    <p class="text-white text-2xl font-semibold">
      Use 'W' or 'S' to move the astronaut
    </p>
  </section>

  <section v-if="messageTypeCode < axisZEnum.webStack && messageTypeCode > axisZEnum.projects" class="info-2 centerDiv flex flex-col items-center gap-2">
    <p class="text-white text-2xl font-semibold">
      Thats my stacks
    </p>
  </section>

  <section v-if="messageTypeCode < axisZEnum.projects && messageTypeCode > -2000" class="info-2 centerDiv flex flex-col items-center gap-2">
    <p class="text-white text-2xl font-semibold">
      Thats my projects
    </p>
  </section>

</template>

<style scoped>

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
};

.centerDiv {
  animation: fadeIn 1s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
