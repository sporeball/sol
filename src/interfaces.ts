/*
  interfaces.ts
  sol interface definitions
  copyright (c) 2022 sporeball
  MIT license
*/

export interface ViewOptions {
  name: string;
}

export interface ListOptions {
  head: string;
  items: string[];
  x: number;
  y: number;
  width: number;
}

export interface KeypressData {
  sequence: string;
  name: string;
  ctrl: boolean;
  meta: boolean; // alt
  shift: boolean;
  code: string;
}
