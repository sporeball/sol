/*
  interfaces.ts
  sol interface definitions
  copyright (c) 2022 sporeball
  MIT license
*/

export interface ItemOptions {
  x: number;
  y: number;
}

export interface ViewOptions {
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
  name: string | undefined;
  ctrl: boolean;
  meta: boolean; // alt
  shift: boolean;
  code?: string;
}
