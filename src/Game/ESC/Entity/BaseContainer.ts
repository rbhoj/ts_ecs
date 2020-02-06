import IEntity from '../../ESC/Entity/IEntity';

class BaseContainer {
  filter(idList:number[]):IEntity[] {
    let list:IEntity[] = [];

    for(let c = 0; c < idList.length; c++) {
      
    }

    return list;
  }

  
}

export default BaseContainer;