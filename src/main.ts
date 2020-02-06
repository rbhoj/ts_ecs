import ControlContainer from './Dep/ControlContainer';
import Engine from './Game/Control/Engine';

import Play from './Game/Scenes/Play';

let control:ControlContainer = new ControlContainer();
let engine:Engine = control.getMain();
let play:Play = control.getPlay();

engine.startGame();

console.log(play);