<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { carouselList } from '@/data/carouselList'
import { ImageId } from '@/types/types'

import discordPng from '@/assets/png/discord_clone.png';
import pokedexPng from '@/assets/png/pokedex.png';
import reactMusicPng from '@/assets/png/react_music.png';
import socialDevPng from '@/assets/png/social_dev.png';

const images: {[Key in ImageId]: string} = {
  discord: discordPng,
  pokedex: pokedexPng,
  reactMusic: reactMusicPng,
  socialDev: socialDevPng,
}

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
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in carouselList" :key="item.title">
        <!-- <div
          class="aspect-video w-full bg-white rounded-2xl"
          v-on:click="() => handleCardInfo(item)"
        >
          <img
            :src="images[item.imageId]"
            class="w-full h-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div> -->
        <carousel-card />
      </swiper-slide>
    </swiper>

    <!-- <carousel-card
      v-if="infoCard"
      :info="infoCard"
      :image="images[infoCard.imageId]"
      :toggle-modal="() => (infoCard = null)"
    /> -->
  </div>
</template>

<style scoped>
.swiper {
  @apply  p-4 rounded-md bg-white translate-y-[-2rem] md:translate-y-0 ;
  width: calc(100vw - 14rem);

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);
  }
}

.swiper-slide {
  @apply bg-center bg-cover max-h-[70vh] w-full aspect-[1/2] md:aspect-[2/1] md:max-w-[800px];

}

.bounce {
  animation: bounce 1s infinite;
}

</style>
