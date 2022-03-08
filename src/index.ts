/*
  index.ts
  sol index file
  copyright (c) 2022 sporeball
  MIT license
*/

import terminalKit from 'terminal-kit';
export const term = terminalKit.terminal;

interface KeyData {
  isCharacter: boolean;
  codepoint?: number;
  code: number | Buffer;
}

export function init() {
  console.log("\u001B[?1049h");
  term.hideCursor(true);
  term.moveTo(1, 1);
  term.red.bold('hello sol!');
  term.grabInput(true);
}

export function listen() {
  term.on('key', (name: string, matches: string[], data: KeyData) => {
    if (name === 'CTRL_C') {
      exit();
    }
  });
}

export function exit() {
  console.log("\u001B[?1049l");
  term.hideCursor(false);
  term.grabInput(false);
  setTimeout(() => process.exit(), 100);
}
