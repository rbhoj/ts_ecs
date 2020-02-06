import IComponent from '../Component/IComponent';

interface IEntity {
  components:IComponent[];

  getComponentIds():number[];
}

export default IEntity;