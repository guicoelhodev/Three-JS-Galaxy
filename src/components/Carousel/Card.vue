<script setup lang="ts">
type TProps = {
  bg: string[]
  color: {
    primary: string
    secondary: string
  }
}

const props = defineProps<TProps>()
</script>

<template>
  <div
    style="pointer-events: visible"
    class="w-full h-full h-full flex flex-col gap-4 overflow-y-auto md:overflow-hidden p-4 md:pb-4 rounded-lg md:flex-row"
    :style="{ backgroundColor: props.bg[0] }"
  >
    <section class="hidden flex-col gap-4 w-full relative md:flex">
      <span
        class="z-30 translate-x-[-200px] circle left-[-8rem]"
        :style="{ backgroundColor: props.bg[0] }"
      >
        <img
          class="object-cover ml-20"
          src="~/assets/png/eeve.png"
          alt="eeve pokemon image"
        />
      </span>
      <span
        class="left-[-2rem] z-20 translate-x-[-140px] circle"
        :style="{ backgroundColor: props.bg[1] }"
      ></span>
      <span
        class="left-4 z-10 translate-x-[-90px] circle"
        :style="{ backgroundColor: props.bg[2] }"
      ></span>
    </section>

    <section class="w-56 mx-auto md:hidden">
         <img
          class="object-contain h-full w-full "
          src="~/assets/png/eeve.png"
          alt="eeve pokemon image"
        />
    </section>
    <section class="z-40 w-full flex flex-col gap-2">
      <header class="px-4 pt-4">
        <h3 class="text-3xl font-bold" :style="{ color: props.color.primary }">
          Pokedex v3
        </h3>
      </header>

      <article
        class="h-full flex flex-col align-self-stretch px-4 overflow-y-auto"
        :style="{ color: props.color.secondary }"
      >
        <p>
          A pokedex created with pokeApi This project was created with react and
          typescript, using vite.js as bundler tool and styled components with
          react Query skadjhadsjkadshkj hakjdshdaskj h Incididunt voluptate amet
          laboris minim amet pariatur consequat dolore. Id irure commodo minim
          amet proident nostrud pariatur sit in commodo. Irure nostrud sunt id
          consequat deserunt proident reprehenderit anim ipsum quis officia do
          ea ut. Tempor id est et est quis dolor consequat consequat velit.
          Deserunt Lorem amet id in veniam sint voluptate veniam sint eiusmod
          deserunt cillum.
        </p>
      </article>

      <footer class="self-end pr-4">
        <a
          href="https://www.google.com"
          target="_blank"
          referrerpolicy="no-referrer"
          class="text-xl underline decoration-1"
          :style="{ color: props.color.primary }"
          >View project</a
        >
      </footer>
    </section>
  </div>
</template>

<style>
.circle {
  @apply absolute top-0 left-0 w-[480px] aspect-square rounded-full translate-y-[-2rem];
}
</style>
