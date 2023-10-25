import Environment from "../../../../environment.js";
import { Runtime, MakeNum } from "../../../../values.js";

export default function(_args: Runtime[], _env: Environment) {
    return MakeNum(Date.now());
}