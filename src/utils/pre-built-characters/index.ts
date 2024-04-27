import type { Character } from '@/types';
import florian from '@/utils/pre-built-characters/json/florian.json';
import francisco from '@/utils/pre-built-characters/json/francisco.json';

export default [
  florian as Character,
  francisco as Character
] satisfies Character[];
