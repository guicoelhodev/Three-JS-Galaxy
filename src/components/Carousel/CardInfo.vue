<script setup lang="ts">
import { ICarouselItem } from '@/types/types';
import { Icon } from '@iconify/vue'
import gsap from 'gsap'

type IProps = {
  toggleModal: Function
  info: ICarouselItem | null
}
const { toggleModal, info  } = defineProps<IProps>()

const showContent = ref(false)

onMounted(() => {
  gsap.to('.container_item', {
    width: '30px',
    height: '30px',
    duration: 0.5,
    borderRadius: '40px',
    onComplete: () => {
      gsap.to('.container_item', {
        borderRadius: '8px',
        height: '600px',
        width: '600px',
        ease: 'power2.in',
        duration: 0.4,
        onComplete: () => {
          showContent.value = true
        },
      })
    },
  })
})

console.log(info)
</script>

<template>
  <div
    style="pointer-events: visible;"
    class="z-30 container_item bg-zinc-50 w-0 h-0 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <div v-if="showContent && info" class="card-content h-full max-h-[520px]">
      <header class="flex justify-between gap-4 p-4">
        <h3 class="font-bold text-3xl text-blue-400">{{ info.title }}</h3>
          <button class="cursor-pointer mr-1" v-on:click="() => toggleModal()">
            <Icon icon="ooui:close" height="28" color="gray" />
          </button>
      </header>

      <section class="flex items-stretch h-full">
        <article class="w-full  p-4 flex flex-col gap-4">
          <h4 class="subtitle">Description</h4>

          <article class="overflow-y-auto">
            <p class="text">{{ info.description }}</p>
          </article>

          <aside class="mt-auto">
            <a
              :href="info.link"
              target="_blank"
            >
              <img
                class="w-[340px] m-auto object-cover aspect-video rounded-md"
                :src="info.imagePath"
              />
            </a>
          </aside>

          <footer class="flex justify-end gap-4">
            <img
              class="w-12 object-contain"
              src="@/assets/png/react_logo.png"
              alt="logo"
            />
            <img
              class="w-12 object-contain"
              src="@/assets/png/typescript_logo.png"
              alt="logo"
            />
            <img
              class="w-12 object-contain"
              src="https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png"
              alt="logo"
            />
          </footer>
        </article>
      </section>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  @apply font-bold text-2xl bg-blue-400 text-white p-2 rounded-md;
}

.text {
  @apply font-semibold text-gray-400;
}
</style>
