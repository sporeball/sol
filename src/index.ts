/*
  index.ts
  sol index file
  copyright (c) 2022 sporeball
  MIT license
*/

import terminalKit from 'terminal-kit';
export const term = terminalKit.terminal;

import { KeyData } from './interfaces.js';
import * as UI from './UI.js';

export function init() {
  // console.log("\u001B[?1049h");
  term.fullscreen(true);
  term.hideCursor(true);
  term.grabInput(true);

  UI.splash();
}

export function listen() {
  term.on('key', (name: string, matches: string[], data: KeyData) => {
    if (name === 'CTRL_C') {
      exit();
    }
  });
}

export function exit() {
  // console.log("\u001B[?1049l");
  term.fullscreen(false);
  term.hideCursor(false);
  term.grabInput(false);
  setTimeout(() => process.exit(), 100);
}
