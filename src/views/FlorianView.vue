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
      <div>
        <h2>Origem:</h2>
        <div class="modifier-list">
          <ModifierInfo
            v-for="mod in damageMods" :key="mod.name" 
            :name="mod.name" :value="mod.value" :description="mod.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ModifierInfo from '@/components/ModifierInfo.vue';
import { florianSkills } from '@/utils/data';

type Mod = {
  name: string,
  modifier: string,
  value: number,
  description: string
}

const weapon = ref("Florete Mitral Maciça");
const dices = ref("1d8+1d6");
const critChange = ref(18);
const critMod = ref(2);

const mods = ref(florianSkills.reduce<Mod[]>((skillList, skill) => {
  const modifier = skill.modifiers.find((modifier) => modifier.status === 'damage');

  if (modifier) {
    skillList.push({
      name: skill.name,
      modifier: modifier.status,
      value: modifier.value,
      description: skill.description
    })
  }
  return skillList;
}, []));

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

  h2 {
    font-size: 22px;
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
      width: 250px;
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
