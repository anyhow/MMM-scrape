var NodeHelper = require("node_helper");

// add require of other javascripot components here
// var xxx = require('yyy') here
const c = require('jsdom')
const { JSDOM } = c;

module.exports = NodeHelper.create({
  config:null,
	init(){
		console.log("init module helper "+this.name);
	},

	start() {
		console.log(`Starting module helper: ${this.name}`);
	},

	stop(){
		console.log(`Stopping module helper: ${this.name}`);
	},

	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config=payload
			// wait 15 seconds, send a message back to module
			//setTimeout(()=> { }, 15000)
		}
		else if(notification === "getcontent") {
			 this.getcontent()
		}

	},
	getcontent(){
		  console.log("getting content from "+this.config.url)
			JSDOM.fromURL(this.config.url)
				.then((dom) => {
						console.log(" data from JSDOM");
					const document = dom.window.document;
					const nodeList = document.querySelectorAll(this.config.domselector);
					console.log(dom.serialize());
					this.sendSocketNotification("node_data",nodeList)
				},

				(error) => {
					console.log(" error from JSDOM =" +error);
				}
				)			
	},

});