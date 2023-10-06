<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { carouselList } from '@/data/carouselList'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { ICarouselItem } from '@/types/types'

const modules = [EffectCoverflow, Pagination]
const infoCard = ref<ICarouselItem | null>(null)

const handleCardInfo = (card: ICarouselItem) => {
  infoCard.value = card
}
</script>
<template>
  <div>
    <swiper
      :style="{ 'pointer-events': infoCard ? 'none' : 'visible' }"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :loop="true"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in carouselList" :key="item.title">
        <div
          class="aspect-video w-full bg-white rounded-2xl"
          v-on:click="() => handleCardInfo(item)"
        >
          <img
            :src="item.imagePath"
            class="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </swiper-slide>
    </swiper>

    <carousel-card-info
      v-if="infoCard"
      :info="infoCard"
      :toggle-modal="() => (infoCard = null)"
    />
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  max-width: 700px;
  /* background-color: white; */
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
}

/* .swiper-slide img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 80%;
  ba
} */
</style>
