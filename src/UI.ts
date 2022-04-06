/*
  UI.ts
  sol user interface file
  copyright (c) 2022 sporeball
  MIT license
*/

import { ListOptions } from './interfaces.js';

import str from './lib/str.js';

export function splash() {
  // TODO: make the whole thing into a View instead
  str.yellow.bold('sol');
  // create list...
  // sol
  // n  new project
  // o  open project
  // O  open most recent
}

/**
 * create a list of items
 * @param {ListOptions} options
 */
export function createList(options: ListOptions) {
  // ...
}
