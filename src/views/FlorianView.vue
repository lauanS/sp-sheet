<template>
  <div class="page-layout">
    <div class="weapon">
      <h1>{{ weapon }}</h1>
      <div class="property-list">
        <div
          v-for="property in [
            { name: 'Ataque', value: hit },
            { name: 'Dados', value: dices },
            { name: 'Dano', value: damage },
            { name: 'Crítico', value: `${critChange}/${critMod}` }
          ]"
          :key="property.name"
          class="property"
        >
          <span class="name">{{ property.name }}</span>
          <span class="value">{{ property.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

type Mod = {
  name: string,
  modifier: string,
  value: number
}

const weapon = ref("Florete Mitral Maciça");
const dices = ref("1d8+1d6");
const critChange = ref(18);
const critMod = ref(2);

const mods = ref([
  { name: 'Luta', modifier: 'hit', value: 12 }, // (lvl/2===5) +  dex (3 | armas ágil) + treino (4)
  { name: 'Esgrimista', modifier: 'damage', value: 5 }, // int
  { name: 'En Garde', modifier: 'critChance', value: 2 }, // def também
  { name: 'Estilo uma arma', modifier: 'hit', value: 2 }, // def também
  { name: 'Ataque preciso', modifier: 'critChance', value: 2 },
  { name: 'Ataque preciso', modifier: 'critMod', value: 1 },
  { name: 'Ataque Acrobático', modifier: 'hit', value: 2 },
  { name: 'Ataque Acrobático', modifier: 'damage', value: 2 }
])

const calcMod = (arr: Mod[], modifier: string) => {
  console.log('called', modifier)
  return arr.reduce((prev, curr) => {
    if (curr.modifier === modifier) {
      return prev + curr.value;
    }
    return prev;
  }, 0);
}

const damage = computed(() => calcMod(mods.value, 'damage'));
const hit = computed(() => calcMod(mods.value, 'hit'));
</script>

<style scoped lang="scss">
.page-layout {
  display: flex;
}

.weapon {
  h1 {
    font-size: 24px;
    display: block;
  }

  .property-list {
    display: flex;
  }

  .property {
    border: 1px solid white;
    border-radius: 10px;
    background-color: #161f32;
    width: 125px;

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
}

.input {
  input {
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px 10px;
  }
}
</style>
