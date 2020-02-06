import IEntity from '../ESC/Entity/IEntity';
import IComponent from '../ESC/Component/IComponent';

import BaseEntity from '../ESC/Entity/BaseEntity';
import Position from '../Component/Physical/Position';

class Square implements IEntity {
  private _baseEntity:BaseEntity;
  private _position:Position;

  private _compList:IComponent[];

  constructor(baseEntity:BaseEntity, position:Position) {
    this._baseEntity = baseEntity;
    this._position = position;

    this._compList = [this._position];
  }

  get components():IComponent[] {
    return this._emitComponents();
  }

  getComponentIds():number[] {
    return this._emitIds();
  }

  _emitComponents():IComponent[] {
    return this._baseEntity.emitComponents(this._compList);
  }

  _emitIds():number[] {
    return this._baseEntity.emitComponentIds(this._compList)
  }
}

export default Square;