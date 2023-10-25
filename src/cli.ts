#! /usr/bin/env node
import * as fs from 'node:fs/promises';
import config from './interpreter/others/object.js';
import { run, repl } from './index.js';
import pJSON from '../package.json' assert { type: "json" };
const options = process.argv;
options.shift();
options.shift();

async function main() {
    switch (options[0]) {
        case "help":
            {
                console.log("DisCode Help Menu: V"+pJSON.version);
                console.log("- help: sends this message");
                console.log("- run: runs a file");
                console.log("- repl: run the REPL");
            }
            break;
        case "repl":
            {
                repl();
            }
            break;
        case "run":
            {
                run(options[1]);
            }
            break;
        default:
            {
                console.log("Welcome to DisCode!\nuse 'ss help' for help!");
            }
            break;
    }
}

main();