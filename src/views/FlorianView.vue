<template>
  <div class="page-layout">
    <div class="weapon">
      <h1>{{ weapon }}</h1>
      <div class="status-list">
        <StatusInfo
          v-for="status in [
            { name: 'Ataque', value: hit , code: 'hit'},
            { name: 'Dano', value: `${dices} + ${damage}` , code: 'damage'},
            { name: 'Crítico', value: `${critChance}/${critMod}`, code: 'critChance' },
            { name: 'Defesa', value: defense , code: 'defense' }
          ]"
          :key="status.name"
          :name="status.name"
          :value="status.value"
          :selected="selectedStatus === status.code"
          @click="() => selectStatus(status.code as ModifierStatus)"
        />
      </div>
      <div>
        <h2>Origem:</h2>
        <div class="modifier-list">
          <ModifierInfo
            v-for="mod in selectedMod" :key="mod.name" 
            :name="mod.name" :value="mod.value" :description="mod.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ModifierStatus } from '@/utils/data';
import { ref, computed } from 'vue';
import ModifierInfo from '@/components/ModifierInfo.vue';
import StatusInfo from '@/components/StatusInfo.vue';
import { florianSkills } from '@/utils/data';

type Mod = {
  name: string,
  modifier: string,
  value: number,
  description: string
}

const weapon = ref("Florete Mitral Maciça");
const dices = ref("1d8+1d6");

const selectedStatus = ref<ModifierStatus>('hit');

const modList = ref(florianSkills.reduce<Mod[]>((skillList, skill) => {
  skill.modifiers.forEach(modifier => {
    skillList.push({
      name: skill.name,
      modifier: modifier.status,
      value: modifier.value,
      description: skill.description
    })
  });

  return skillList;
}, []));

const filterModList = (status: string) => modList.value.filter((mod) => mod.modifier === status);
const damageMods = computed(() => filterModList('damage'));
const hitMods = computed(() => filterModList('hit'));
const critChanceMods = computed(() => filterModList('critChance'));
const critModMods = computed(() => filterModList('critMod'));
const defenseMods = computed(() => filterModList('defense'));

const selectedMod = computed(() => {
  const possibleMods = {
    damage: damageMods,
    hit: hitMods,
    critChance: critChanceMods,
    critMod: critModMods,
    defense: defenseMods
  }

  return (possibleMods[selectedStatus.value]).value;
});

const calcMod = (arr: Mod[]) => {
  return arr.reduce((prev, curr) => {
    return prev + curr.value;
  }, 0);
};

const damage = computed(() => calcMod(filterModList('damage')));
const hit = computed(() => calcMod(filterModList('hit')));
const defense = computed(() => calcMod(filterModList('defense')));
const critChance = computed(() => 20 - calcMod(filterModList('critChance')));
const critMod = computed(() => calcMod(filterModList('critMod')));

function selectStatus(status: ModifierStatus): void {
  selectedStatus.value = status;
}
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

  .status-list {
    display: flex;
  }

  .modifier-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 250px;
      margin-right: 10px;
      margin-bottom: 20px;
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
