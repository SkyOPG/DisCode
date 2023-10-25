import colors from 'colors';

export class SkyScriptWarn {
	constructor(message: string | undefined){
		if(message === undefined){
			console.log(colors.cyan("Warning: ")+colors.yellow("An unknown error happened."))
		}
		console.log(colors.cyan("Warning: ")+colors.yellow(message!));
	}
}