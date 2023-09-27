<script setup lang="ts">
import { axisZEnum } from '@/enums/axisZEnum'
import { useViewStore } from '@/store/useViewStore';

const viewStore = useViewStore();

watch(() => viewStore.axisZ, () => {
  console.table({ axisZ: viewStore.axisZ, messageCode: messageTypeCode.value });
});

const messageTypeCode = computed(() => {
  const enumValues = Object.values(axisZEnum);

  // for (const value of enumValues){
  //   // if(viewStore.axisZ !== value) continue;
  //   return value; 
  // }
  return viewStore.axisZ;
})

// watch(messageTypeCode, () => {
//   // fadeIn('.info-1', true, 17);
// })

onMounted(() => {
  //fadeIn('.info-2', false, 28);
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
  <section v-if="messageTypeCode < axisZEnum.moveText && messageTypeCode > axisZEnum.webStack" class="info-2 centerDiv flex flex-col items-center gap-2">
    <p class="text-white text-2xl font-semibold">
      Use 'A' or 'D' to looking around
    </p>
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
