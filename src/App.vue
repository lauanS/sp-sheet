<template>
  <div class="main-layout">
    <RouterView />
    <FixedFooter />
  </div>
</template>

<script setup lang="ts">
import FixedFooter from '@/components/FixedFooter.vue';
</script>

<style scoped>
.main-layout {
  background-color: #111827;
  color: white;

  min-width: 100vw;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
