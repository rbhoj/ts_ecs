import ISystem from '../ESC/ISystem';
import SystemEntry from '../ESC/SystemEntry';

//Systems
import HelloSys from '../System/Util/HelloSys';

class SystemManager {
  _systemEntry:SystemEntry;
  _systemListLow:SystemEntry[];
  _systemListNormal:SystemEntry[];
  _systemListHigh:SystemEntry[];

  _helloSys:HelloSys;
  
  constructor(systemEntry:SystemEntry, helloSys:HelloSys) {
    this._systemEntry = systemEntry;
    this._systemListLow = [];
    this._systemListNormal = [];
    this._systemListHigh = [];

    this._helloSys = helloSys;

    this._addSystems();
  }

  executeAll() {
    this._executeList(this._systemListHigh, 'update');
    this._executeList(this._systemListNormal, 'update');
    this._executeList(this._systemListLow, 'update');
  }

  executeAllCreates() {
    this._executeList(this._systemListHigh, 'create');
    this._executeList(this._systemListNormal, 'create');
    this._executeList(this._systemListLow, 'create');
  }

  _executeList(list:SystemEntry[], exeType:string) {
    for (let c = 0; c < list.length; c++) {
      let system:ISystem = list[c].data;

      

      if(exeType == 'update') {
        system.update();
      } else if(exeType == 'create') {
        system.create();
      }
    }
  }

  _addSystems() {
    let lowPriority = this._getLowPriority();
    let normalPriority = this._getNormalPriority();
    let highPriority = this._getHighPriority();

    this._addSystem(this._helloSys, normalPriority);
  }

  _addSystem(system:ISystem, prio:number) {
    let lowPriority = this._getLowPriority();
    let normalPriority = this._getNormalPriority();
    let highPriority = this._getHighPriority();

    let sys = this._systemEntry.emitSystem(system, prio);

    if(prio == lowPriority) {
      this._systemListLow.push(sys);
    } else if(prio == highPriority) {
      this._systemListHigh.push(sys);
    } else {
      this._systemListNormal.push(sys);
    }
    
  }

  _getLowPriority():number {
    return this._systemEntry.lowPriority;
  }

  _getHighPriority():number {
    return this._systemEntry.highPriority;
  }

  _getNormalPriority():number {
    return this._systemEntry.normalPriority;
  }

}

export default SystemManager;