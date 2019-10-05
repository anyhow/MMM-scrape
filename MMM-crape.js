Module.register("MMM-crape",{
	defaults: {
		url: "https://fm4.orf.at/player/live",
		domselector: "span.playing"
	},
	
	const jsdom = require("jsdom");
	const { JSDOM } = jsdom;
	
	scrapContent: function(){
	JSDOM.fromURL(this.config.url)
		.then((dom) => {
			const document = dom.window.document;
			const nodeList = document.querySelectorAll(this.config.domselector).textContent;);
			let i = 0;
			for( i=0; i < nodeList.length; i++ ) {
       				console.log(x[index]);
				var wrapper = document.createElement("div");
				wrapper.innerHTML = nodeList[i];
				return wrapper;
 			}
		}
	},

	
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = "HAALLoo";
		console.log("TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST");
		return wrapper;

	}
});
