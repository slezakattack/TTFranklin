exports.print_summary = function (data, config){	
	var summary = '';	
	if (typeof data !== 'undefined') {
		var upvotes = data.room.metadata.upvotes;
		var downvotes = data.room.metadata.downvotes;
		summary = upvotes + " :thumbsup: " + downvotes + " :thumbsdown:";
		summary += ". Summary: " + print_shit(upvotes, downvotes, config);
	}
	
	return summary;
};

function print_shit(upvotes, downvotes, config) {
	var msg;
	if (upvotes > downvotes) {
		var index = Math.floor(Math.random() * config.suck.length)
		console.log(index);
		msg = config.suck[index];
	} else {
		var index = Math.floor(Math.random() * config.awesome.length);
		console.log(index);
		msg = config.awesome[index];
	}
	
	return msg;
}