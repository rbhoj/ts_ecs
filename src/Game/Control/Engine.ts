import SystemManager from '../ESC/SystemManager';

class Engine {
  private _systemManager:SystemManager;
  private _frames:number;
  private _startTime:number;

  constructor(systemManager:SystemManager) {
    this._systemManager = systemManager;

    this._frames = 0;
    this._startTime = 0;
  }

  startGame() {
    this._startTime = new Date().getTime();

    this._executeCreates();

    window.requestAnimationFrame(this._executeSystems.bind(this));
  }

  _executeCreates():any {
    this._systemManager.executeAllCreates();
  }

  _executeSystems(timeStamp:any) {
    this._systemManager.executeAll();
    
    //this._showFPS();

    window.requestAnimationFrame(this._executeSystems.bind(this));
  }

  _showFPS() {
    this._frames++;

    if (new Date().getTime() - this._startTime > 1001) {
      this._startTime = new Date().getTime();
      this._frames = 0;
    }

    console.log("Frame: %s | Time: %s | FPS: %s", 
    this._frames,
    new Date().getTime() - this._startTime, 
    this._frames/ ((new Date().getTime() - this._startTime) / 1000) );
  }
}

export default Engine;