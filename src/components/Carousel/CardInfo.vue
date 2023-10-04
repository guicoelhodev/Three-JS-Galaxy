<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.to('.container_item', {
    width: '30px',
    height: '30px',
    duration: 0.5,
    borderRadius: '8px',
    onComplete: () => {
      gsap.to('.container_item', {
        height: '600px',
        width: '900px',
        ease: 'power1.in',
        duration: 0.5
      })
    },
  })
})
</script>

<template>
  <section
    class="z-30 container_item bg-red-200 w-0 h-0 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  ></section>
</template>
