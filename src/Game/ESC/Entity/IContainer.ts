import IEntity from '../Entity/IEntity';

interface IContainer {
  filter(idList:number[]):IEntity[];
}

export default IContainer;