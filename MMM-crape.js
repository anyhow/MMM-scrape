Module.register("MMM-crape",{
	defaults: {
		url: "https://fm4.orf.at/player/live",
		domselector: "span.playing"
	},


const jsdom = require("jsdom");
const { JSDOM } = jsdom;


	getDom: function() {


	var wrapper = document.createElement("div");
	wrapper.innerHTML = "HAALLLO";
	return wrapper;
	}
});
