var http = require('http');

exports.get_amalism = function(config) {
	var output = '';
	
	var req = http.request(config.amalism_request, function (response) {
		
		
		response.on('data', function(chunk) {
			output += chunk;
		});
		
		response.on('end', function() {
			output = JSON.parse(output);
			console.log('Total: ' + output.response.total_posts);
			
			var index = Math.floor(Math.random() * output.response.total_posts);	
console.log('index: ' + index);			
			bot.speak('Amal: ' + output.response.posts[index].text);
		});
	});
	
	req.on('error', function(err) {
		console.log(err);
	});
	
	req.end();
	
	
};