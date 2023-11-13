<template>
  <div
    class="z-30 text-white fixed bottom-[2rem] translate-x-[-20px]  p-4 rounded-md md:translate-x-[80px] md:rotate-[270deg] md:right-0 md:bottom-[50%] md:translate-y-[50%]"
    style="pointer-events: visible"
  >
    <section class="relative flex p-2 w-[260px]">
      <input
        class="mx-auto w-full"
        type="range"
        min="0"
        max="100"
        step="50"
        v-model="range"
      />

      <button
        class="w-16 absolute translate-x-[-10px] translate-y-[-20px]"
        @click="handleRange(0)"
      >
        <img src="~/assets/svg/earth.svg" alt="earth" />
      </button>

      <button
        class="w-14 absolute translate-x-[110px] translate-y-[-16px]"
        @click="handleRange(50)"
      >
        <img src="~/assets/svg/moon.svg" alt="moon" />
      </button>
      <button
        class="w-14 absolute translate-x-[220px] translate-y-[-16px]"
        @click="handleRange(100)"
      >
        <img src="~/assets/svg/mars.svg" alt="mars" />
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
const range = ref(0)

const handleRange = (value: number) => (range.value = value)
</script>
