<template>
  <button :class="`skill ${isActive ? 'active' : '' }`" @click="toggleActivedState">
    <div class="skill-icon"><img :src="skill.img" ></div>
    <div class="skill-title"><h2>{{ skill.name }}</h2></div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { skill } = defineProps<{ skill: { name: string, img: string} }>()

const isActive = ref(false);

function toggleActivedState() {
  isActive.value = !isActive.value
}
</script>

<style lang="scss">
.skill {
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  padding: 15px;

  background-color: #111827;

  width: 130px;
  height: 160px;

  &-icon {
    text-align: center;

    img {
      height: 64px;
      width: 64px;
    }
  }

  &-title {
    h2 {
      font-size: 18px;
      text-align: center;
    }
  }

  &.active {
    border: 1px solid #ffd859;
  }
}
</style>