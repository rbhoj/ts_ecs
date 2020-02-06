import IContainer from '../ESC/Entity/IContainer';
import IEntity from '../ESC/Entity/IEntity';

import Square from '../Entity/Square';

class Play implements IContainer {
  private _square:Square;

  constructor(square:Square) {
    this._square = square;

    console.log(this._square);
  }

  filter(idList:number[]):IEntity[] {
    return [];
  }
}

export default Play;