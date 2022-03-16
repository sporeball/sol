/*
  Terminal.ts
  terminal functions for sol
  copyright (c) 2022 sporeball
  MIT license
*/

import { Zp } from './types.js';

/**
 * change the current cursor position
 * @param {Zp} x
 * @param {Zp} y
 */
export function move<T>(x: Zp<T>, y: Zp<T>) {
  // the escape sequence puts y first!
  process.stdout.write(`\x1b[${y};${x}H`);
}

/**
 * show or hide the cursor
 * @param {boolean} show
 */
export function cursor(show: boolean) {
  process.stdout.write('\x1b[?25');
  process.stdout.write(show ? 'h' : 'l');
}

/**
 * enable or disable the alternate screen buffer
 * @param {boolean} enable
 */
export function fullscreen(enable: boolean) {
  process.stdout.write('\x1b[?1049');
  process.stdout.write(enable ? 'h' : 'l');
}
