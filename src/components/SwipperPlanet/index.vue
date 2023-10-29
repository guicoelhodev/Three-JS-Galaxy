<template>
  <div
    class="text-white fixed right-0 rotate-[270deg] p-4 rounded-md"
    style="pointer-events: visible"
  >
    <section class="relative flex bg-red-200 p-2 w-[260px]">
      <input
        class="mx-auto w-full bg-red-200"
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
