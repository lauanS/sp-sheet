import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const preBuilt = ref(false);

  function setPreBuilt(value: boolean) {
    preBuilt.value = value;
  }

  return { preBuilt, setPreBuilt };
});
