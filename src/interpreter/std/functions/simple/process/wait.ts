import { execSync } from "node:child_process";
import Environment from "../../../../environment.js";
import { Runtime,NumberValue,makeNull } from "../../../../values.js";

export default function(args: Runtime[], _scope: Environment){
    const value = (args[0] as NumberValue).value;
    execSync(`sleep ${value}`, {});
    return makeNull();
}