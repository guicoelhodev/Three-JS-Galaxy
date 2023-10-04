<script setup lang="ts">
import ReactLogo from '@/assets/png/react_logo.png'
import TsLogo from '@/assets/png/typescript_logo.png'
import ThreeLogo from '@/assets/png/three_logo.png'
import GraphqlLogo from '@/assets/png/graphql_logo.png'
import TailwindLogo from '@/assets/png/tailwind_white_logo.png'
import NodeLogo from '@/assets/png/node_logo.png'
import FirebaseLogo from '@/assets/png/firebase_logo.png'
import SupabaseLogo from '@/assets/png/supabase_logo.png'
import NextLogo from '@/assets/png/next_logo.png'

const images: { src: string; title: string }[] = [
  {
    src: ReactLogo,
    title: 'React JS',
  },
  {
    src: TsLogo,
    title: 'Typescript',
  },
  {
    src: ThreeLogo,
    title: 'Three JS',
  },
  {
    src: GraphqlLogo,
    title: 'GraphQL',
  },
  {
    src: TailwindLogo,
    title: 'Tailwind',
  },
  {
    src: NodeLogo,
    title: 'Node JS',
  },
  {
    src: FirebaseLogo,
    title: 'Firebase',
  },
  {
    src: SupabaseLogo,
    title: 'Supabase',
  },
  {
    src: NextLogo,
    title: 'Next JS',
  }
]
</script>

<template>
  <section class="text-white flex flex-col gap-6 items-center">
    <h3 class="font-bold text-4xl text-pink-400">Developer skills</h3>
    <ul
      class="max-w-[680px] p-4 flex flex-wrap items-center justify-center gap-8"
    >
      <li v-for="image in images" :key="image.src" class="flex flex-col items-center gap-2 font-semibold">
        <img
          class="w-16 object-contain aspect-square"
          :src="image.src"
          alt="language stack logo overview"
        />
        <span class="font-bold text-lg text-cyan-400 px-2 py-1 rounded-sm">{{ image.title }}</span>
      </li>
    </ul>
  </section>
</template>
