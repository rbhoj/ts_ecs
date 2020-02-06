import * as pixi from 'pixi.js';

import ISystem from '../../ESC/ISystem';

class HelloSys implements ISystem {
  constructor() {

  }

  create() {
    console.log("Creating System");

    pixi.utils.sayHello('canvas');
  }

  update() {
    //console.log("Hello World!");
  }
}

export default HelloSys;