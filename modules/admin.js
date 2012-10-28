exports.handler = function(name,text) {
	var user = name;
	var cmd_arr = text.split(' ');
	var cmd = cmd_arr[0];

	console.log("Admin Command: "+cmd);
   	switch(cmd) {
		case '/stayalive':
			bot.addDj();
			break;
		case '/hopoff':
			bot.remDj(config.bot_properties.user_id);
			break;
		case '/skipsong':
			bot.skip();
			break;
		default:
			break;
	}
};

//50639310eb35c1720000015e
//5065f3a9aaa5cd612d000158