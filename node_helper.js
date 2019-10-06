var NodeHelper = require("node_helper");

// add require of other javascripot components here
// var xxx = require('yyy') here
const c = require('jsdom')
const { JSDOM } = c;

module.exports = NodeHelper.create({
  config:null,
	debug: false,
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

		//setting JSDOM  parameters
		if(this.config.loadScripts){
			var jsdomurl = '{ runScripts: "dangerously", resources: "usable" }'
		} else {
		var jsdomurl = "";
		}

		  console.log("getting content from "+this.config.url)
			JSDOM.fromURL(this.config.url,+jsdomurl)
				.then(
				  // this is the no error return from JSDOM promise
				  (dom) => {
						console.log(" data from JSDOM");
						var nodeList = dom.window.document.querySelectorAll(this.config.domselector);
						// dump the html so we can find the node
						if(this.debug){
							console.log(dom.serialize());
							console.log("returning nodelist to module, size="+Object.keys(nodeList).length);
							console.log("objectkeys "+Object.keys(nodeList).textContent);
							console.log("nodeList0 "+ nodeList[0]);
							console.log("nodelisttextcontent "+ nodeList[0].textContent) 
						}
						//transform nodeList into array, because nodeList couldnt be received by MMM-scape.js
						var content = [];
						for(i=0; i<Object.keys(nodeList).length;i++){
						content[i] = nodeList[i].textContent;
						//console.log("content i "+ i + content[i]);
						};

						// send the content back to the module to display
						this.sendSocketNotification("node_data",content)
					},
					(error) => {
						console.log(" error from JSDOM =" +error);
					}
				)
	},

});
