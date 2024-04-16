export type ModifierStatus = 'defense' | 'hit' | 'damage' | 'critChance' | 'critMod';

export type Modifier = {
  status: ModifierStatus,
  value: number
}

export type BasicSkill = {
  name: string,
  type: 'passive' | 'active',
  modifiers: Modifier[]
  description: string
}

export type PassiveSkill = BasicSkill & {
  type: 'passive'
}

export type ActiveSkill = BasicSkill & {
  type: 'active'
  img: string
}

export type Skill = PassiveSkill | ActiveSkill

export type Weapon = {
  name: string,
  dice: string,
  critChance: number,
  critMod: number
};

export type Character = {
  name: string,
  weapon: Weapon,
  skills: Skill[]
}
