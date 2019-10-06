var NodeHelper = require("node_helper");

// add require of other javascripot components here
// var xxx = require('yyy') here
const c = require('jsdom')
const { JSDOM } = c;

module.exports = NodeHelper.create({
  config:null,
	debug: true,
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
		}
		// module wants content from api
		else if(notification === "getcontent") {
			 this.getcontent()
		}

	},
	// get the selected dom nodes from the specific web site page
	getcontent(){
		  console.log("getting content from "+this.config.url)
			JSDOM.fromURL(this.config.url)
				.then(
				  // this is the no error return from JSDOM promise
				  (dom) => {
						console.log(" data from JSDOM");
						let nodeList = dom.window.document.querySelectorAll(this.config.domselector);
						// dump the html so we can find the node
						if(this.debug){
							console.log(dom.serialize());
							console.log("returning nodelist to module, size="+Object.keys(nodeList).length) 
						}
						// send the content back to the module to display
						this.sendSocketNotification("node_data",nodeList)
					},
					(error) => {
						console.log(" error from JSDOM =" +error);
					}
				)			
	},

});