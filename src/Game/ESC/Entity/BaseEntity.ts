import IComponent from '../../ESC/Component/IComponent';
import IEntity from '../../ESC/Entity/IEntity';

class BaseEntity {
  constructor() {

  }

  emitComponents(compArray:IComponent[]):IComponent[] {
    return compArray;
  }

  emitComponentIds(compArray:IComponent[]):number[] {
    let arr:number[] = [];

    for(let c = 0; c < compArray.length; c++) {
      let component:IComponent = compArray[c];
      let id:number = component.id;

      arr.push(id);
    }

    return arr;
  }
}

export default BaseEntity;