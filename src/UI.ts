/*
  UI.ts
  sol user interface file
  copyright (c) 2022 sporeball
  MIT license
*/

import { term } from './index.js';

export function splash() {
  createTwoColumnList('^Ysol', [
    ['^+^Cn^  new project', ''],
    ['^+^Co^  open project', '^+^CO^  open most recent']
  ]);
}

/**
 * create a two-column list
 * the list will be centered on both axes
 * @param {string} head - the list's title
 * @param {string[][]} rows
 */
export function createTwoColumnList(head: string, rows: string[][]) {
  const listWidth: number = 48;
  const listHeight: number = rows.length + 1; // +2 for head, -1 from last row
  let y = (term.height / 2) - (listHeight / 2);

  const columnOneStart: number = Math.floor((term.width - listWidth) / 2);
  const longestColumnTwoItem = Math.max(
    ...rows.map(row => row[1].replace(/\^ /gm, ' ').replace(/\^./gm, '').length)
  );
  const columnTwoStart: number = term.width - longestColumnTwoItem - columnOneStart;

  term.moveTo(columnOneStart, y);
  term.bold(head);
  y += 2;

  for (const row of rows) {
    const [left, right] = row;
    term.moveTo(columnOneStart, y);
    term(left);
    term.moveTo(columnTwoStart, y);
    term(right);
    y++;
  }
};
