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
      <div class="modifier-list">
        <ModifierInfo
          v-for="mod in damageMods" :key="mod.name" 
          :name="mod.name" :value="mod.value" :description="mod.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ModifierInfo from '@/components/ModifierInfo.vue';

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
  { name: 'Luta', modifier: 'hit', value: 12, description: '' }, // (lvl/2===5) +  dex (3 | armas ágil) + treino (4)
  { name: 'Esgrimista', modifier: 'damage', value: 5, description: '' }, // int
  { name: 'En Garde', modifier: 'critChance', value: 2, description: '' }, // def também
  { name: 'Estilo uma arma', modifier: 'hit', value: 2, description: '' }, // def também
  { name: 'Ataque preciso', modifier: 'critChance', value: 2, description: '' },
  { name: 'Ataque preciso', modifier: 'critMod', value: 1, description: '' },
  { name: 'Ataque Acrobático', modifier: 'hit', value: 2, description: '' },
  { name: 'Ataque Acrobático', modifier: 'damage', value: 2, description: '' }
])

const damageMods = computed(() => mods.value.filter((mod) => mod.modifier === 'damage'))
const hitMods = computed(() => mods.value.filter((mod) => mod.modifier === 'hit'))
const critChanceMods = computed(() => mods.value.filter((mod) => mod.modifier === 'critChance'))
const critModMods = computed(() => mods.value.filter((mod) => mod.modifier === 'critMod'))

const calcMod = (arr: Mod[]) => {
  return arr.reduce((prev, curr) => {
    return prev + curr.value;
  }, 0);
}

const damage = computed(() => calcMod(damageMods.value));
const hit = computed(() => calcMod(hitMods.value,));
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

  .modifier-list {
    margin-top: 20px;
    display: flex;

    > div {
      width: 150px;
      margin-right: 10px;
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
