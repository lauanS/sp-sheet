<template>
  <div class="container">
    <div class="mod-value">
      {{ value > 0 ? `+${value}` : value }}
    </div>
    <div class="mod-title">
      <span>{{ name }}</span>
    </div>
    <div class="mod-description">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { name, value, description } = defineProps<{ name: string, value: number, description: string }>()
</script>

<style scoped lang="scss">
.container {
  background-color: #0d121b;
  border-radius: 15px;
  padding: 8px;
  box-sizing: border-box;

  .mod-value {
    background-color: #223d39;
    border: 1px solid white;
    border-radius: 12px;

    text-align: center;
    font-size: 28px;
    line-height: 50px;

    height: 50px;

    padding: 14px 0px;
    margin-bottom: 16px;
  }

  .mod-title {
    margin-bottom: 10px;

    span {
      font-size: 18px;
    }
  }

  .mod-description {
    height: 54px;

    p {
      text-align: justify;

      font-size: 12px;
      line-height: 18px;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
              line-clamp: 3; 
      -webkit-box-orient: vertical;
    }
  }
}
</style>