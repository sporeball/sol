/*
  index.ts
  sol index file
  copyright (c) 2022 sporeball
  MIT license
*/

import * as term from './Terminal.js';

import readline from 'readline';

export function init() {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  term.fullscreen(true);
  term.cursor(false);
  // mouse reporting
  // process.stdout.write('\x1b[?1000h');

  // process.stdout.write('\x1b[6n');
}

export function listen() {
  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      exit();
    } else if (key) {
      console.log(key);
    }
  });
}

export function exit() {
  term.fullscreen(false);
  // process.stdout.write('\x1b[?1000l');
  term.cursor(true);
  setTimeout(() => process.exit(), 100);
}
