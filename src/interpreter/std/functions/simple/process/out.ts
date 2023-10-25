import util from "node:util";
import Environment from "../../../../environment.js";
import { Runtime,makeNull,NumberValue,StringValue,BooleanValue,NullValue } from "../../../../values.js";

export default function(this: any, args: Runtime[], scope: Environment){
    const log: any[] = []

    for (const arg of args) {
        switch (arg.type) {
            case 'number':
                log.push(((arg as NumberValue).value))
            continue
            case 'string':
                log.push((arg as StringValue).value)
            continue
            case 'boolean':
                log.push(((arg as BooleanValue).value))
            continue
            case 'null':
                log.push(((arg as NullValue).value))
            continue
            default:
                log.push(arg)
        }
    }
        console.log(util.format.apply(this, log))

    return makeNull();
}