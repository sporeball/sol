/*
  View.ts
  sol View class and related code
  for instances of this class, see views.ts
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
