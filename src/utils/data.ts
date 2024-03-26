export type Modifier = {
  status: 'defense' | 'hit' | 'damage' | 'critChance' | 'critMod',
  value: number
}

export type Skill = {
  name: string,
  type: 'passive' | 'active',
  modifiers: Modifier[]
  description: string
}

export const florianSkills: Skill[] = [
  { name: 'Autoconfiança', type: 'passive', modifiers: [{ status: 'defense', value: 5 }], description: 'Você pode somar seu bônus de Carisma em vez de Destreza na Defesa (mas continua não podendo somar um bônus de atributo na Defesa quando usa armadura pesada).' },
  { name: 'Insolência', type: 'passive', modifiers: [{ status: 'defense', value: 5 }], description: 'Você soma seu bônus de Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel' },
  { name: 'Esquiva sagaz', type: 'passive', modifiers: [{ status: 'defense', value: 2 }], description: 'No 3º nível, você recebe +1 na Defesa. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.' },
  { name: 'Esgrimista ', type: 'passive', modifiers: [{ status: 'damage', value: 3 }], description: 'Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível)' },
  { name: 'En Garde', type: 'passive', modifiers: [{ status: 'defense', value: 2 }, { status: 'critChance', value: 2 }], description: 'Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando uma arma leve ou ágil, você recebe +2 na Defesa e na margem de ameaça' },
  { name: 'Estilo uma arma', type: 'passive', modifiers: [{ status: 'defense', value: 2 }, { status: 'hit', value: 2 }], description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma' },
  { name: 'Ataque preciso', type: 'passive', modifiers: [{ status: 'critChance', value: 2 }, { status: 'critMod', value: 1 }], description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico. Pré-requisito: Estilo de Uma Arma' },
  { name: 'Ataque acrobático', type: 'passive', modifiers: [{ status: 'damage', value: 2 }, { status: 'hit', value: 2 }], description: 'Quando se aproxima de um inimigo com uma pirueta ou pulo (em termos de jogo, usando Acrobacia ou Atletismo para se mover) e o ataca no mesmo turno, você recebe +2 em seu teste de ataque e na rolagem de dano' },
  { name: 'Bravata imprudente', type: 'passive', modifiers: [{ status: 'hit', value: 2 }, { status: 'critChance', value: 2 }], description: 'Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição a sua escolha, como lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc. Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o fim da aventura' },
  { name: 'Combate defensivo', type: 'passive', modifiers: [{ status: 'hit', value: -2 }, { status: 'defense', value: 5 }], description: 'Quando usa a ação atacar, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 13.'}
]
