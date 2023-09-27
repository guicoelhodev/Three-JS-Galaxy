import { defineStore } from 'pinia';

export const useViewStore = defineStore('view', () => {
  const axisZ = ref(0);

  function handleAxisZ (z: number) {
    axisZ.value = z;
  };

  return {
    axisZ,
    handleAxisZ
  }
})