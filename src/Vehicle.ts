"use strict";

import {IEngine} from './Engine';
import {DieselEngine} from './DieselEngine';
import {GasolineEngine} from './GasolineEngine';

export class Vehicle {
  engine: IEngine;

  constructor(type: string) {
    switch(type) {
      case "diesel":
        this.engine = new DieselEngine(200);
        break;
      case "gasoline":
      default:
        this.engine = new GasolineEngine(200);
    }
  }
}
