import IComponent from '../../ESC/Component/IComponent';

class Position implements IComponent {
  public id:number;
  public name:string;

  private _x:number;
  private _y:number;
  private _angle:number;

  constructor() {
    this.id = 0;
    this.name = "";

    this._x = 0;
    this._y = 0;
    this._angle = 0;
  }

  getData(): {x: number, y: number, angle:number} {
    return {
      x: this._x,
      y: this._y,
      angle: this._angle
    }
  }

  acceptData(data: {x: number, y: number, angle:number} ) {
    this._x = data.x;
    this._y = data.y;
    this._angle = data.angle;
  }
}

export default Position;