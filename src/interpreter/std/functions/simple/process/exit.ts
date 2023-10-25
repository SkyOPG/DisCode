import Environment from "../../../../environment.js";
import { Runtime, makeNull, NumberValue } from "../../../../values.js";

export default function(args: Runtime[], _scope: Environment) {
    if (args[0] == undefined || args[0].type != 'number') {
        console.log(`Process exited with exit code: 1`)
        process.exit(1)
    } else if ((args[0] as NumberValue).value == 0) {
        console.log(`Process exited with exit code: 0`)
        process.exit(0)
    } else {
        console.log(`Process exited with exit code: 1`)
        process.exit(1)
    }

	return makeNull();
}