/*
  types.ts
  custom types and declaration mergers
  copyright (c) 2022 sporeball
  MIT license
*/

export interface KeyData {
  isCharacter: boolean;
  codepoint?: number;
  code: number | Buffer;
}

// defined in @types/terminal-kit
// namespace Terminal {
//   interface Impl {
//     // ...
//   }
// }
