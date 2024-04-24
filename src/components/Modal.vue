<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Teleport to="body">
    <div v-if="show" class="background" @click.self="$emit('close')">
      <div class="container">
        <div v-if="title" class="title">
          <h2>{{  title }}</h2>
        </div>
        <div class="content">
          <slot />
        </div>
        <div v-if="actions" class="actions">
          <button @click="$emit('close')">Fechar</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { show } = defineProps<{
  show: boolean,
  title?: string,
  actions?: boolean
}>();

defineEmits<
  (e: 'close') => void
>();
</script>

<style scoped lang="scss">
.background {
  display: flex;

  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  width: 300px;
  margin: auto;
  border-radius: 10px;
  padding: 20px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  
  color: white;
  background-color: #161f32;

  .title {
    box-sizing: border-box;
    margin: 0 0 15px;

    h2 {
      font-size: 22px;
      line-height: 26px;
      margin: 0px;
    }
  }

  .actions {
    display: flex;
    padding-top: 15px;

    button {
      color: #fff;
      background-color: #EF695C;
      border-radius: 6px;
      padding: 6px 8px;

    }
  }
}
</style>