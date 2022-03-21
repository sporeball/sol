/*
  str.ts
  output function
  copyright (c) 2022 sporeball
  MIT license
*/

import { Str } from './types.js';

/**
 * returns an object with a getter,
 * which outputs the escape sequence for a display attribute
 * this is used to create the modifiers on str()
 * @param {number} attribute
 */
function builder(attribute: number) {
  return {
    get: function() {
      process.stdout.write(`\x1b[${attribute}m`);
      return this;
    }
  };
}

/**
 * output a string
 * this can be chained, with modifiers, endlessly
 * @param {string} s the string to output
 * @returns {function} this function, itself
 */
const str = function(s) {
  process.stdout.write(s);
  // reset attributes
  process.stdout.write('\x1b[0m');
  // return this function
  return str;
} as Str;

// create the modifiers
const modifiers = {
  bold: builder(1),
  gray: builder(90),
  // only the bright colors
  red: builder(91),
  green: builder(92),
  yellow: builder(93),
  blue: builder(94),
  magenta: builder(95),
  cyan: builder(96),
  // "bright white" (not normal!)
  white: builder(97)
};
Object.defineProperties(str, modifiers);

export { str as default, modifiers };
