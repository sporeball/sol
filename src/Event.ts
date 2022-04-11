/*
  Event.ts
  sol event emission file
  copyright (c) 2022 sporeball
  MIT license
*/

import events from 'events';

import { KeypressData } from './interfaces.js';

import * as sol from './index.js';

const emitter = new events.EventEmitter();

// "keypress" event
// other things may emit these too
emitter.on('keypress', (data: KeypressData) => {
  if (data.ctrl && data.name === 'c') {
    sol.exit();
  } else {
    keypressBuffer.push(data);
    console.log(data);
  }
});

const keypressBuffer: KeypressData[] = [];

export {
  emitter as default,
};
