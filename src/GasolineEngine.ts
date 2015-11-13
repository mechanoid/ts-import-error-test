"use strict";

import {IEngine} from './Engine';

export class GasolineEngine implements IEngine {
  type: string;

  constructor(public hp:number) {
    this.type = "gasoline"
  }
}
