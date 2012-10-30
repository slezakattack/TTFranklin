exports.handler = function(name, text) {
	var user = name;
	var cmd_arr = text.split(' ');
	var cmd = cmd_arr[0];

	console.log("Command: "+cmd);
   	switch(cmd) {
		case '/amal':
			var amal = require('./../commands/all/amal');			
			amal.get_amalism(config);
			break;
		default:			
			break;
	}
};