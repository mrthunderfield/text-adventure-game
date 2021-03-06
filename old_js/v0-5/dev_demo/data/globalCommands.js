var globalCommands = {

	"save": {
		type: "action",
		scope: "game",
		action: "saveGame",
		description: "'save' saves the current game.",
		active: true
	},
	"help": {
		type: "action",
		scope: "game",
		action: "showHelp",
		description: "'help' shows a list of available commands. Note that this shows only those that are available at the current time, not ALL the commands.",
		active: true
	}
};

module.exports = globalCommands;