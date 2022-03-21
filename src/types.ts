/*
  src/types.ts
  type definitions
  copyright (c) 2022 sporeball
  MIT license
*/

/**
 * a negative number
 * @see Rational - similar tactic
 */
export type Negative<N> =
  // N should be assignable to Number
  N extends number
    // N is assignable to Negative if it matches the template
    // otherwise return never
    ? `${N}` extends `-${infer Q}` ? N : never
    : never;

// a rational number (a number with a fractional part)
export type Rational<N> =
  N extends number
    ? `${N}` extends `${infer X}.${infer Y}` ? N : never
    : never;

// an integer greater than zero
export type Zp<N> =
  N extends number
    ? N extends (0 | Negative<N> | Rational<N>)
      ? never
      : N
    : never;
