<template>
  <div>
    <label for="import-character">Importar personagem</label>
    <input
      id="import-character"
      ref="doc"
      type="file"
      accept="application/json"
      @change="(payload) => importDoc(payload)"
      hidden
    />
  </div>
</template>

<script setup lang="ts">
import type { Character } from '@/types';

const emit = defineEmits<{
  (e: 'onload', character: Character): void
}>()

async function importDoc(event: Event): Promise<void> {
  const target = event.target as HTMLInputElement;
  
  if (!target || !target.files || !target.files.length) {
    return;
  }

  const doc = target.files[0];
  if (doc.type !== 'application/json') {
    return;
  }
  
  const docContent = await doc.text();

  const character = JSON.parse(docContent) as Character;

  emit('onload', character);
}
</script>

<style scoped lang="scss">
div {
  border-radius: 10px;
  padding: 8px 12px;

  width: fit-content;
  background-color: #43477e;

  color: white;

  cursor: pointer;

  label {
    cursor: pointer;
  }
}
</style>