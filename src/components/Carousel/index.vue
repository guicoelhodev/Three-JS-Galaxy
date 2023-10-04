<script setup lang="ts">
const carousel = ref<HTMLDivElement | null>(null)

const items = Array.from({ length: 10 }, (_, i) => i + 1)
const currentCard = ref(2)

let isDragging = false
let startPosition = { x: 0, y: 0 }
let scrollLeft = 0

const handleMouseDown = (event: MouseEvent) => {
  if (!carousel.value) return

  isDragging = true
  startPosition = {
    x: event.clientX,
    y: event.clientY,
  }
  scrollLeft = carousel.value.scrollLeft
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging || !carousel.value) return

  const deltaX = event.clientX - startPosition.x

  carousel.value.scrollTo({
    left: scrollLeft - deltaX,
    behavior: 'smooth',
  })

  return updateCurrentCard()
}

const updateCurrentCard = () => {
  if (!carousel.value) return

  const carouselRect = carousel.value.getBoundingClientRect()
  const carouselCenter = carouselRect.left + carouselRect.width / 2

  const cards = carousel.value.querySelectorAll('.card')

  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect()
    const cardCenter = cardRect.left + cardRect.width / 2

    if(cardCenter - carouselCenter < cardRect.width / 2){
      currentCard.value = index + 1
    }
  })
}

</script>
<template>
  <div>
    <section
      ref="carousel"
      class="carousel p-2 flex gap-6 items-center max-w-[1060px]"
      style="pointer-events: visible"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="() => (isDragging = false)"
      @mouseleave="() => (isDragging = false)"
    >
      <article
        v-for="item in items"
        :key="item"
        :class="[
          'card h-32 aspect-video bg-white p-2 rounded-md',
          { active: item === currentCard },
          { rotateLeft: item === currentCard - 1 },
          { rotateRight: item === currentCard + 1 },
        ]"
        style="pointer-events: none;"
      >
        {{ item }}
      </article>
    </section>
  </div>
</template>

<style scoped>
@keyframes return {
  0% {
    transform: perspective(800px) rotateY(40deg);
  }
  100% {
    transform: perspective(800px) rotateY(0deg);
  }
}
.carousel {
  overflow: hidden !important;
  scroll-snap-type: x mandatory;
}

.card {
  flex: 0 0 auto;
  scroll-snap-align: center;
}

.active {
  height: 300px;
  transition: all 300ms ease-in-out;
  /* animation: return 1s infinite alternate; */
}
.rotateLeft {
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(40deg);
}

.rotateRight {
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(-40deg);
}
</style>
