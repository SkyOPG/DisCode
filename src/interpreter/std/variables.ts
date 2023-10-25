import Environment from "../environment.js";
import { MK_BOOL, makeNull, MakeString } from "../values.js";
export function stdvar(env: Environment){
    env.declareVar("true", MK_BOOL(true), true);
	env.declareVar("false", MK_BOOL(false), true);
	env.declareVar("null", makeNull(), true);
}