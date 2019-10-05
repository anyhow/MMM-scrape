Log.info('error');
Log.log('log');
Log.error('info');

const JSDOM = require('jsdom').JSDOM;

console.log('TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST');
Module.register("MMM-crape",{
	defaults: {
		url: "https://fm4.orf.at/player/live",
		domselector: "span.playing"
	},
	

	
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = "HAALLoo";
		return wrapper;
	}
});
