/*
  lib/types.ts
  lib folder type definitions
  copyright (c) 2022 sporeball
  MIT license
*/

import type str from './str.js';
import type { modifiers } from './str.js';

// describes the str function
export type Str = {
  // the function, which returns itself
  (s: string): typeof str
} & {
  // and each of the modifiers, which do the same
  [K in keyof (typeof modifiers)]: typeof str
}

