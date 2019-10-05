const JSDOM = require('jsdom').JSDOM;

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
