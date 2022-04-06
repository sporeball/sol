/*
  View.ts
  sol View ("page") class and related code
  copyright (c) 2022 sporeball
  MIT license
*/

import { ViewOptions } from './interfaces.js';

export interface View extends ViewOptions {}
export class View {
  constructor(options: ViewOptions) {
    Object.assign(this, options);
  }
}
