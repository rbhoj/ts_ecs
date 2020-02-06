import SmartDepend from '../Dep/SmartDepend';

//Control
import Engine from '../Game/Control/Engine';

//ESC
import BaseEntity from '../Game/ESC/Entity/BaseEntity';
import SystemManager from '../Game/ESC/SystemManager';
import SystemEntry from '../Game/ESC/SystemEntry';

//System
//Util
import HelloSys from '../Game/System/Util/HelloSys';

//Component
import Position from '../Game/Component/Physical/Position';

//Entity
import Square from '../Game/Entity/Square';

//Scenes
import Play from '../Game/Scenes/Play';

class ControlContainer {
  private _smartDepend:SmartDepend;
  private _engine:any;
  private _systemManager:any; _systemEntry:any; _helloSys:any; _baseEntity:any; 
  private _position:any; _square:any;
  private _play:any;

  constructor() {
    this._smartDepend = new SmartDepend();

    this._addModules();
    this._addDepends();
  }


  public getMain():Engine {
    let spEngine = <Engine> this._smartDepend.resolve(this._engine);

    return spEngine;
  }

  public getPlay():Play {
    let play = <Play> this._smartDepend.resolve(this._play);

    return play;
  }

  private _addModules() {
    //Control
    this._engine = this._smartDepend.addModule(Engine, false);

    //ESC
    this._systemManager = this._smartDepend.addModule(SystemManager, false);
    this._systemEntry = this._smartDepend.addModule(SystemEntry, false);
    this._baseEntity = this._smartDepend.addModule(BaseEntity, false);

    //System
    //Util
    this._helloSys = this._smartDepend.addModule(HelloSys, false);

    //Component
    this._position = this._smartDepend.addModule(Position, false);

    //Entity
    this._square = this._smartDepend.addModule(Square, false);

    //Scenes
    this._play = this._smartDepend.addModule(Play, false);
  }

  private _addDepends() {
    //Control
    this._smartDepend.addDependency(this._engine, this._systemManager);

    //ECS
    this._smartDepend.addDependency(this._systemManager, this._systemEntry);
    this._smartDepend.addDependency(this._systemManager, this._helloSys);

    //Entity
    this._smartDepend.addDependency(this._systemManager, this._helloSys);

    this._smartDepend.addDependency(this._square, this._baseEntity);
    this._smartDepend.addDependency(this._square, this._position);

    //Scene
    this._smartDepend.addDependency(this._play, this._square);
  }

}

export default ControlContainer;