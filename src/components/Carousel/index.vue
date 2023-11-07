<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

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
      :loop="true"
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
      <swiper-slide v-for="item in [1,1,1,1,1]" :key="item">
        <carousel-card
          :bg="['#E5F0D9', '#C1EAC3', '#9AD9A5']"
          :color="{ primary: '#529801', secondary: '#6FCF0E' }"
        />
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
