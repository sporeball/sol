/*
  index.ts
  sol index file
  copyright (c) 2022 sporeball
  MIT license
*/

import readline from 'readline';

import { KeypressData } from './interfaces.js';

import * as term from './Terminal.js';
import emitter from './Event.js';

export function init() {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  term.fullscreen(true);
  term.cursor(false);
  // mouse reporting
  // process.stdout.write('\x1b[?1000h');

  term.move(1, 1);
  // process.stdout.write('\x1b[6n');
}

export function listen() {
  process.stdin.on('keypress', (str: string, data: KeypressData) => {
    emitter.emit('keypress', data);
  });
}

export function exit() {
  term.fullscreen(false);
  // process.stdout.write('\x1b[?1000l');
  term.cursor(true);
  setTimeout(() => process.exit(), 100);
}
