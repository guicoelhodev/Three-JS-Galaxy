<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { projectList} from '@/data/projectsList';
const modules = [EffectCoverflow, Pagination]
</script>
<template>
  <div>
    <swiper
      :style="{ 'pointer-events': 'visible' }"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :loop="false"
      :coverflowEffect="{
        rotate: 60,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in projectList" :key="item.data.title">
        <carousel-card v-bind="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  @apply p-4 rounded-md translate-y-[-2rem] md:translate-y-0;
  width: calc(100vw - 14rem);

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);
  }
}

.swiper-slide {
  @apply bg-center bg-cover max-h-[70vh] mb-4 w-full aspect-[1/2] md:aspect-[2/1] md:max-w-[800px];
}

.bounce {
  animation: bounce 1s infinite;
}

.circle {
  @apply rounded-full w-10 h-10;
}
</style>
