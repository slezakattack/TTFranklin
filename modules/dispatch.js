exports.process_cmd = function(data) {
	var name = data.name;
	var text = data.text;

	if(name === config.bot_properties.name) return;
    var text_arr = text.split(" ");
    console.log("text:" + text);
   	switch(text_arr[0]) {
      //list of admin commands
   		case '/stayalive':
   		case '/hopoff':
      case '/skipsong':
        var admin = require("./admin");
        admin.handler(name,text);
   			break;
      //list of regular commands

      //list of super user commands
      case '/make_admin':
      case '/remove_admin':
        break;
   		default:
   			bot.speak(text);
   			break;
   	}
};