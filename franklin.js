global.fs = require('fs');
global.url = require('url');

global.Bot;
global.bot;
global.config;

initializeFranklin();

console.log("Welcome to Franklin the big sleaze bot!");

function initializeFranklin() {
	try {
		Bot = require('ttapi');
	} catch(e) {
		console.log(e);
		console.log('Check to see that you have the ttapi package installed for node.js.');
	}
	
	var args = process.argv;
	config = loadConfigFile();	
	bot = new Bot(config.bot_properties.auth, config.bot_properties.user_id, config.bot_properties.room_id);
/*	bot.on('speak', function(data) {
		var name = data.name;
		var text = data.text;
		
	});*/
	bot.speak("Hey michael and big phil!");
}

function loadConfigFile() {
	try {
		var config = JSON.parse(fs.readFileSync('config.json', 'ascii'));
	} catch(e) {
		console.log('ERROR: Couldn\'t load the config.json file.');
		console.log(e);
		return {};
	}
	return config;
}