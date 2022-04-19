#!/usr/bin/env node

/*
  sol.ts
  sol CLI entry point
  copyright (c) 2022 sporeball
  MIT license
*/

import * as sol from './index.js';
import * as UI from './UI.js';

sol.init();
sol.listen();
UI.renderView('splash');
