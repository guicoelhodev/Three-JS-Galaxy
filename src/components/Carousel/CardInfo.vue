<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.to('.container_item', {
    width: '30px',
    height: '30px',
    duration: 0.5,
    borderRadius: '40px',
    onComplete: () => {
      gsap.to('.container_item', {
        borderRadius: '8px',
        height: '600px',
        width: '900px',
        ease: 'power1.in',
        duration: 0.5,
      })
    },
  })
})
</script>

<template>
  <div
    class="z-30 container_item bg-zinc-50 w-0 h-0 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <section class="p-4">
      <header class="flex justify-between gap-4">
        <div>
          <article class="flex items-start gap-4">
            <h3 class="font-bold text-3xl">Pokedex-v3 project</h3>
            <img
              src="@/assets/png/react_logo.png"
              class="w-12 object-contain"
              alt="react logo"
            />
          </article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam
            consequatur facilis dolorem? Ullam, culpa? Rem ea, obcaecati laborum
            quos eos similique dolores, maxime voluptas itaque, sapiente
            recusandae accusamus repudiandae?
          </p>
        </div>
        <article class="flex flex-col items-center gap-2">
          <img
            class="w-80 object-cover aspect-video rounded-md"
            src="https://github.com/guicoelhodev/Pokedex-v3/raw/main/github/homepage_2.png"
          />
        </article>
      </header>
    </section>
  </div>
</template>
