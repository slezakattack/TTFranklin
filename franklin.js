global.fs = require('fs');
global.url = require('url');

global.Bot;
global.bot;
global.config;
global.dispatch = require('./modules/dispatch');

var summary = require('./modules/print_summary');

initializeFranklin();
registerBotEvents();

console.log("Welcome to Franklin the big sleaze bot!");

function initializeFranklin() {
	try {
		Bot = require('ttapi');
	} catch(e) {
		console.log(e);
		console.log('Check to see that you have the ttapi package installed for node.js.');
	}
	
	config = loadConfigFile();

	try {
		bot = new Bot(config.bot_properties.auth, config.bot_properties.user_id, config.bot_properties.room_id);
	} catch(e) {
		console.log(e);
	}	
}

function registerBotEvents() {
	bot.on('newsong', function(data) {
	});
	
	bot.on('endsong', function(data) {
		var speech = summary.print_summary(data, config.summary);
		if (speech !== '') {
			bot.speak(speech);
		}
	});	

	bot.on('speak', function(data) {
		dispatch.process_cmd(data);
	});
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