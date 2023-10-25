import { run } from "../../../../../index.js";
import Environment from "../../../../environment.js";
import { Runtime, StringValue, makeNull } from "../../../../values.js";

export default function(args: Runtime[], _scope: Environment){
    let file = "error";
    for(const arg of args){
        switch(arg.type){
            case "string":
                file = (arg as StringValue).value
            break;
            default:
                file = arg as unknown as string;
            break;
            
        }
    }
    run(file);

    return makeNull();
}