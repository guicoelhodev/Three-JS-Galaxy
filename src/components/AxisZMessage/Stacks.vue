<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { languages } from '@/data/languagesData';
import { ITools } from '@/types/types';

  const notAllowedLangs: ITools[] = ['reactQuery', 'firebase']
  const languagesFiltered = Object.values(languages).filter((lang) => !notAllowedLangs.includes(lang.id) )
</script>

<template>
  <section class="text-white flex flex-col gap-6 items-center">
    <h3 class="font-bold text-4xl text-pink-400">Developer skills</h3>
    <ul
      class="max-w-[680px] p-4 flex flex-wrap items-center justify-center gap-8"
    >
      <li v-for="lang in languagesFiltered" :key="lang.icon" class="flex flex-col items-center gap-2 font-semibold">
        <Icon :icon='lang.icon' height="56px" width="56px" />
        <span class="font-bold text-lg text-cyan-400 px-2 py-1 rounded-sm">{{ lang.title }}</span>
      </li>
    </ul>
  </section>
</template>
