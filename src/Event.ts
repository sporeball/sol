/*
  Event.ts
  sol event emission file
  copyright (c) 2022 sporeball
  MIT license
*/

import events from 'events';

import { KeypressData } from './interfaces.js';

import * as sol from './index.js';

// default export
const emitter = new events.EventEmitter();

// sometimes abbreviated as "kpb"
const keypressBuffer: KeypressData[] = [];

/**
 * 'keypress' event callback function
 * some unrelated operations (e.g. DSR, mouse clicks) will emit these too
 * @param {KeypressData} data
 * @private
 */
function keypressEvent(data: KeypressData) {
  // TODO: Alt+[ understandably does weird stuff, figure out how to skip it

  // Ctrl+C to exit
  if (data.ctrl && data.name === 'c') {
    sol.exit();
  }
  else {
    keypressBuffer.push(data);
    console.log(data);
  }
}

/**
 * 'kpbPurgeRequest' event callback function
 * occasionally a function might request that the keypress buffer be emptied, and information found there be sent its way
 * @private
 */
function kpbPurgeRequestEvent() {
  // TODO
}

// register everything
emitter.on('keypress', (data: KeypressData) => keypressEvent(data));
emitter.on('kpbPurgeRequest', () => kpbPurgeRequestEvent());

export {
  emitter as default,
};
