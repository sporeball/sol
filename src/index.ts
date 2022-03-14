/*
  index.ts
  sol index file
  copyright (c) 2022 sporeball
  MIT license
*/

import * as UI from './UI.js';

import readline from 'readline';

export function init() {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdout.write('\x1b[?1049h');
  // process.stdout.write('\x1b[?1000h');
  process.stdout.write('\x1b[?25l');
  process.stdout.write('\x1b[;H');
  // process.stdout.write('\x1b[3;10H');
  // process.stdout.write('\x1b[6n');

  UI.splash();
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
  process.stdout.write('\x1b[?1049l');
  process.stdout.write('\x1b[?1000l');
  process.stdout.write('\x1b[?25h');
  setTimeout(() => process.exit(), 100);
}
