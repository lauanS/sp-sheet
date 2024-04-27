<template>
  <button :style="customStyles"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { color } = defineProps<{
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'purple' ;
}>();

const colorHex = computed(() => {
  const supportedColors = {
    blue: { background:'#4190fb', text: '#fff' },
    green: { background:'#04B46F', text: '#fff' },
    red: { background:'#ea6153', text: '#fff' },
    purple: { background:'#43477e', text: '#fff' },
    yellow: { background:'#ffd859', text: '#2c3e50' }
  }

  return color ? supportedColors[color] : supportedColors.yellow;
});

const customStyles = computed(() => {
  return {
    'background-color': colorHex.value.background,
    'color': colorHex.value.text
  }
})
</script>

<style scoped lang="scss">
button {
  color: #fff;
  border-radius: 6px;
  padding: 6px 8px;
}
</style>