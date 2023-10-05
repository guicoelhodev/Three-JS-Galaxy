<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const modules = [EffectCoverflow, Pagination]
const showInfo = ref(false);

const links = [
  'https://github.com/guicoelhodev/Pokedex-v3/raw/main/github/homepage_2.png',
  'https://github.com/guicoelhodev/ReactMusic/raw/main/github/readme_bg.png',
  'https://github.com/guicoelhodev/social_dev/raw/main/github/img/homepage_preview.png',
  'https://github.com/guicoelhodev/discord-clone/raw/master/github/home_view.png',
]
</script>
<template>
  <div>

    <swiper
      :style="{'pointer-events': showInfo ? 'hidden' : 'visible'}"
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
      <swiper-slide v-for="link in links" :key="link">
        <!-- <img :src="link" /> -->
        <div class="aspect-video w-full bg-white rounded-2xl" :onClick="() => showInfo = !showInfo">
          <img :src="link" class="w-full h-full rounded-2xl object-cover"/>
        </div>
    </swiper-slide>
    </swiper>

    <carousel-card-info  v-if="showInfo"/>
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
