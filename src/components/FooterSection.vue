<template>
  <footer>
    <p>Developed by <a target="_blank" href="https://github.com/lauanS">lauanS</a><span v-if="global.preBuilt">, icons by:  <a target="_blank" href="https://icons8.com">Icons8</a></span></p>
  </footer>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global';

const global = useGlobalStore();
</script>

<style>
footer {
  width: 100%;
  height: 60px;
  background-color: #161f32;
  color: white;
  text-align: center;

  p {
    margin: 0;
    padding-top: 21px
  }

  a:link {
    color: #0066cc;
  }

  a:visited {
    color: #8a54ab;
  }

  a:hover, a:active {
    color: #bd429b;
  }
}
</style>