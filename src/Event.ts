/*
  Event.ts
  sol event emission file
  copyright (c) 2022 sporeball
  MIT license
*/

import events from 'events';
import { pEvent } from 'p-event';

import { KeypressData } from './interfaces.js';

import * as sol from './index.js';

// default export
const emitter = new events.EventEmitter();

// sometimes abbreviated as "kpb"
const keypressBuffer: KeypressData[] = [];

/**
 * whether a cursor position report has recently been requested
 * @see cprRequestEvent
 */
let flagCprRequested = false;

/**
 * 'keypress' event callback function
 * this event is emitted every time a key is pressed,
 * but some unrelated operations (e.g. CPR, mouse clicks) will emit it too
 * @param {KeypressData} data
 * @private
 */
async function keypressEvent(data: KeypressData) {
  // Ctrl+C to exit
  if (data.ctrl && data.name === 'c') {
    sol.exit();
    return;
  }

  keypressBuffer.unshift(data);
  // console.log(data);
  // console.log(keypressBuffer.length);

  // if the keypress has a code, it's probably something special
  if (data.code !== undefined) {
    // could be the result of a CPR, which would have set a flag
    // if it isn't set, drop it
    if (data.code === '[R' || data.code.match(/^\[\d+;\d+$/)) {
      if (flagCprRequested === false) {
        keypressBuffer.pop();
      }
    }
    // some other special keypress
    else {
      // emit some sort of event here...
      keypressBuffer.pop();
    }
  }

  // the key is something basic, and nothing special happened before it
  if (data.code === undefined && keypressBuffer.length === 1) {
    // emit some sort of event here...
    keypressBuffer.pop();
  }
}

/**
 * 'cprRequest' event callback function
 * gets the cursor position by issuing a "cursor position report",
 * then emits it via a 'cprRequestAck' event
 * @private
 */
async function cprRequestEvent() {
  flagCprRequested = true;

  // the CPR escape sequence
  process.stdout.write('\x1b[6n');
  // either 1 or 2 'keypress' events will be emitted
  // we only need the data from the first one
  await pEvent(emitter, 'keypress');

  const data: KeypressData = keypressBuffer.pop() as KeypressData;
  // the second event, if emitted, is just the R that closes the first
  if (!data.sequence.endsWith('R')) {
    keypressBuffer.pop();
  }

  // the report will include [row];[column] after the CSI
  // (y first!)
  const [y, x] = data.sequence.match(/\d+;\d+/)![0].split(';');
  emitter.emit('cprRequestAck', x, y);

  flagCprRequested = false;
}

// register everything
emitter.on('keypress', (data: KeypressData) => keypressEvent(data));
emitter.on('cprRequest', () => cprRequestEvent());

export {
  emitter as default,
};
