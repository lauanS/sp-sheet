<template>
  <div class="status">
    <span class="name">{{ name }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
const { name, value } = defineProps<{ name: string, value: string | number }>()
</script>

<style scoped lang="scss">
.status {
  border: 1px solid white;
  border-radius: 10px;
  background-color: #161f32;
  width: 125px;

  cursor: pointer;

  margin-right: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 16px;
    border-bottom: 1px solid white;
    text-align: center;
    width: 100%;

    padding: 5px 0px;
    text-transform: uppercase;
  }

  .value {
    padding: 15px 5px;
  }
}
</style>