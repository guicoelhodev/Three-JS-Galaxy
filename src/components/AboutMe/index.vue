<template>
  <div class="w-full min-h-screen h-full overflow-y-auto p-4">
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-4">
      <header
        class="pt-8 flex items-start flex items-center gap-4 self-start sm:p-4"
      >
        <img
          src="~/assets/jpg/guicoelho.jpg"
          class="w-24 sm:w-36 aspect-square rounded-full"
          alt="avatar png"
        />

        <article>
          <aside class="flex items-center gap-2">
            <h2 class="text-2xl sm:text-4xl font-bold text-white">
              Hi, I'm Guilherme Coelho
            </h2>
            <Icon icon="emojione:flag-for-brazil" width="38" />
          </aside>

          <h3 class="mt-2 text-xl sm:text-3xl font-semibold text-red-400">
            Frontend developer
          </h3>
        </article>
      </header>

      <section class="text-cyan-200 text-2xl text-bold p-4 pt-12 text-center sm:pt-20 sm:text-3xl ">
        <h4>
          I love to code new things, outside the box <br />
          that’s what I do
        </h4>
      </section>

      <section
        class="max-w-5xl w-full mt-12 flex flex-col items-center gap-8 text-white text-xl sm:mt-24 sm:grid sm:grid-cols-2 sm:gap-y-32"
      >
        <article class="p-4 flex flex-col gap-16">
          <p>
            I have been working as a front-end developer since 2021. Currently,
            I am a mid-level developer specialized in the React and Node
            ecosystem.
            <br /><br />
            In my free time, I enjoy using other tools and exploring the vast
            world of web development, including animations, 3D motions, and
            other frameworks like Vue.
          </p>

          <button
            class="border-2 border-red-400 text-red-400 p-4 text-xl rounded-md"
          >
            Curriculum Vitae (PDF)
          </button>
        </article>
        <article class="flex items-center justify-center">
          <img src="~/assets/svg/web_tools.svg" alt="web tools svg" />
        </article>
        <article>
          <img src="~/assets/png/eeve.png" alt="eeve pokemon image" />

          <p class="text-center text-sm translate-y-[-60px] animate-pulse">
            Drag over this eevee
          </p>
        </article>
        <article class="flex items-center justify-center">
          <p>
            I work as a mid-level developer and I'm in the 6th semester of my
            Computer Science degree.I started programming in high school, using
            FPGA and C.
            <br />
            <br />
            I believe that programming is not tied to a specific language or
            framework, but rather to the mindset of how to create new solutions
            for everyday problems.
          </p>
        </article>

        <footer class="p-4 pb-28 col-span-2 flex flex-col items-center">
          <img
            src="~/assets/svg/projects_view.svg"
            class="h-72"
            alt="projects view content"
          />

          <button
            class="w-full max-w-sm border-2 border-red-400 text-red-400 p-2 text-lg rounded-md"
          >
            View my projects
          </button>
        </footer>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
