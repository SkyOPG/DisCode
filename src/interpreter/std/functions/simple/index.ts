// Other imports //
import Environment from "../../../environment.js";
import { MakeNativeFunc } from "../../../values.js";
// time //
import now from './time/now.js';
// process //
import exit from './process/exit.js';
import exec from './process/exec.js';
import loop from './process/loop.js';
import wait from './process/wait.js';
import ask from './process/ask.js';
import out from './process/out.js';
// colors //
import blue from "./colors/blue.js";
import cyan from "./colors/cyan.js";
import green from "./colors/green.js";
import magenta from "./colors/magenta.js";
import red from "./colors/red.js";
import yellow from "./colors/yellow.js";

export default function(env: Environment){
	// time //
	env.declareVar("$now", MakeNativeFunc(now), true);
	// process //
	env.declareVar("$exit", MakeNativeFunc(exit), true);
	env.declareVar("$run", MakeNativeFunc(exec), true);
    env.declareVar("$loop", MakeNativeFunc(loop), true);
	env.declareVar("$wait", MakeNativeFunc(wait), true);
	env.declareVar("$ask", MakeNativeFunc(ask), true);
	env.declareVar("$log", MakeNativeFunc(out), true);
	env.declareVar("$print", MakeNativeFunc(out), true);
	// colors //
	env.declareVar("$blue", MakeNativeFunc(blue), true);
    env.declareVar("$green", MakeNativeFunc(green), true);
    env.declareVar("$red", MakeNativeFunc(red), true);
    env.declareVar("$yellow", MakeNativeFunc(yellow), true);
    env.declareVar("$cyan", MakeNativeFunc(cyan), true);
    env.declareVar("$magenta", MakeNativeFunc(magenta), true);
}