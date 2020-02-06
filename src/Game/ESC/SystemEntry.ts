import ISystem from '../ESC/ISystem';

class SystemEntry {
  private _data:ISystem | null;
  private _priority:number;

  public highPriority:number; normalPriority:number; lowPriority:number;

  constructor() {
    this._data = null;

    this.highPriority = 0;
    this.normalPriority = 1;
    this.lowPriority = 2;


    this._priority = this.normalPriority;
  }

  get data():ISystem {
    return <ISystem> this._data;
  }

  get priority():number {
    return this._priority;
  }

  set priority(prio:number) {
    this._priority = prio;
  }

  set data(dat:ISystem) {
    this._data = dat;
  }

  emitSystem(dat:ISystem, prio:number):SystemEntry {
    let s = new SystemEntry();
    s.data = dat;
    s.priority = prio;

    return s;
  }
}

export default SystemEntry;