<template>
  <div class="main-layout">
    <RouterView />
  </div>
  <FooterSection />
</template>

<script setup lang="ts">
import FooterSection from '@/components/FooterSection.vue';
</script>

<style scoped>
.main-layout {
  background-color: #111827;
  color: white;

  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
  box-sizing: border-box;
}
</style>
