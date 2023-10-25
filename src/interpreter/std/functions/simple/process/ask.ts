import Environment from "../../../../environment.js";
import { Runtime,StringValue } from "../../../../values.js";

export default function(args: Runtime[] | string[], _scope: Environment){
    const data = prompt(args[0] as string);
    return { type: 'string', value: data } as StringValue;
}