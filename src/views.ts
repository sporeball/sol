/*
  views.ts
  the instances of View which sol can render
  for the class itself, see View.ts
  copyright (c) 2022 sporeball
  MIT license
*/

import { View } from './View.js';

const splash: View = new View({});

/**
 * default export is an object containing every View defined here
 * other files will import this as `views`
 * @see types.ts::KnownView - depends on this
 */
export default {
  splash,
};
