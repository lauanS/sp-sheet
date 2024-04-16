<template>
  <div class="page-layout">
    <div class="weapon">
      <h1>{{ characterName }}</h1>
      <ImportCharacterButton style="margin-bottom: 20px;" @onload="fillCharacterInfo" />
      <h2>{{ weapon.name }}</h2>
      <div class="status-list">
        <StatusInfo
          v-for="status in [
            { name: 'Ataque', value: hit , code: 'hit'},
            { name: 'Dano', value: `${weapon.dice} + ${damage}` , code: 'damage'},
            { name: 'Crítico', value: `${critChance}/${critMod}`, code: 'critChance' },
            { name: 'Defesa', value: defense , code: 'defense' }
          ]"
          :key="status.name"
          :name="status.name"
          :value="status.value"
          :selected="selectedStatus === status.code"
          class="status-item"
          @click="() => selectStatus(status.code as ModifierStatus)"
        />
      </div>
      <div class="skill-list">
        <SkillButton
          v-for="skill in activeSkillList" :key="skill.name" 
          :skill="skill"
          @click="() => toggleActiveSkill(skill)"
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
import type { ModifierStatus, ActiveSkill, Character, Weapon } from '@/utils/data';
import { ref, computed } from 'vue';
import ModifierInfo from '@/components/ModifierInfo.vue';
import StatusInfo from '@/components/StatusInfo.vue';
import SkillButton from '@/components/SkillButton.vue';
import ImportCharacterButton from '@/components/ImportCharacterButton.vue';
import { florianSkills } from '@/utils/data';

type Mod = {
  name: string,
  modifier: string,
  value: number,
  description: string
}

const characterName = ref('Nome do personagem');
const weapon = ref<Weapon>({
  name: "Espada curta",
  dice: "1d6",
  critChance: 20,
  critMod: 2
});

const selectedStatus = ref<ModifierStatus>('hit');

const activeSkillList = ref<ActiveSkill[]>([]);

const modList = ref(florianSkills.reduce<Mod[]>((skillList, skill) => {
  if (skill.type === 'passive') {
    skill.modifiers.forEach(modifier => {
      skillList.push({
        name: skill.name,
        modifier: modifier.status,
        value: modifier.value,
        description: skill.description
      })
    });
  }

  if (skill.type === 'active') {
    activeSkillList.value.push(skill as ActiveSkill);
  }

  return skillList;
}, []));

const filterModList = (status: string) => modList.value.filter((mod) => mod.modifier === status);
const damageMods = computed(() => filterModList('damage'));
const hitMods = computed(() => filterModList('hit'));
const critChanceMods = computed(() => filterModList('critChance'));
const critModMods = computed(() => filterModList('critMod'));
const defenseMods = computed(() => filterModList('defense'));

const sumMod = (arr: Mod[]): number => arr.reduce((prev, curr) => prev + curr.value, 0);
const damage = computed(() => sumMod(filterModList('damage')));
const hit = computed(() => sumMod(filterModList('hit')));
const defense = computed(() => sumMod(filterModList('defense')));
const critChance = computed(() => weapon.value.critChance - sumMod(filterModList('critChance')));
const critMod = computed(() => weapon.value.critMod + sumMod(filterModList('critMod')));

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

function selectStatus(status: ModifierStatus): void {
  selectedStatus.value = status;
}

function toggleActiveSkill(skill: ActiveSkill): void {
  const originalLength = modList.value.length;
  modList.value = modList.value.filter((mod) => mod.name !== skill.name);

  if (modList.value.length === originalLength) {
    skill.modifiers.forEach((modifier) => {
      modList.value.push({
        name: skill.name,
        modifier: modifier.status,
        value: modifier.value,
        description: skill.description
      })
    })
  }
}

function fillCharacterInfo(character: Character): void {
  characterName.value = character.name
  weapon.value = character.weapon
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
    flex-wrap: wrap;

    gap: 10px;
    margin-bottom: 10px;

    .status-item {
      margin-bottom: 10px;
    }

    @media (max-width: 480px) {
      .status-item {
        box-sizing: border-box;
        flex: 1;
        width: calc(3 / 12 * 100%);
      }
    }
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    > button {
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      > button {
        box-sizing: border-box;
        flex: 1;
        width: calc(6 / 12 * 100%);
      }
    }
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

    @media (max-width: 480px) {
      > div {
        width: 100%;
      }
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
