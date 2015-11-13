"use strict";

import {IEngine} from './Engine';

export class DieselEngine implements IEngine {
  type: string;

  constructor(public hp:number) {
    this.type = "diesel"
  }
}
