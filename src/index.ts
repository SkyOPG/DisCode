import Parser from './syntax/parser.js';
import { createGlobalEnv } from './interpreter/environment.js';
import { evaluate } from './interpreter/index.js';
import * as fs from 'node:fs';
import * as _colors from 'colors';
import { SkyScriptWarn } from "./interpreter/others/warn.js";
import pJSON from '../package.json' assert { type: "json" };

export async function exec(code: string){
    const parser = new Parser();
    const env = createGlobalEnv();
    const program = parser.createAST(code);
    const result = evaluate(program, env);
    return result;
}

export function run(path: string){
    try{
    const parser = new Parser();
    const env = createGlobalEnv();
    const input = fs.readFileSync(path);
    const program = parser.createAST(input.toString());
    evaluate(program, env);
    } catch(e) {
        new SkyScriptWarn(e as string);
    }
}

export function repl(){
    let DebugMode = false;
    const parser = new Parser();
    const env = createGlobalEnv();
    console.log("Dis"+_colors.cyan("Code"), "REPL v"+pJSON.version);
    console.log(_colors.yellow("TIP: use 'dc:help' for help"));
    while(true){
        const input = prompt(_colors.green("> "));
        const args = input?.slice(3).split(" ") as string[];
        const name = args?.shift();
        if(input?.startsWith("dc:")){
            switch(name){
                case "help":
                    console.log("All commands: \n dc:exit - exit the repl\n dc:debug - enable debug mode\n dc:help - shows this menu\n dc:run - run a file");
                break;
                case "debug":
                    DebugMode = !DebugMode;
                    console.log(_colors.yellow("Toggled Debug mode!"));
                break;
                case "exit":
                    console.log(_colors.red("exiting"));
                process.exit(1);
                case "run":
                    const i = fs.readFileSync(args[0]).toString();
                    exec(i);
                break;
            }
        }else if(!input){
            continue
        }else{
            const program = parser.createAST(input);

        if(DebugMode){
            console.log(program);
        } else {
            try{
                evaluate(program, env);
            } catch(e){
                console.error(e);
            }
        }
        }
    }
}