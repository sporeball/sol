/*
  UI.ts
  sol user interface file
  copyright (c) 2022 sporeball
  MIT license
*/

import { KnownView } from './types.js';

import views from './views.js';

import str from './lib/str.js';

/**
 * change the currently active View
 * @param {KnownView} key string containing the name of a View
 */
export function renderView(key: KnownView) {
  const view = views[key];
  console.log('rendering ' + view.name);
}

export function splash() {
  // TODO: make the whole thing into a View instead
  str.yellow.bold('sol');
  // create list...
  // sol
  // n  new project
  // o  open project
  // O  open most recent
}
