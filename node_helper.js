var NodeHelper = require("node_helper")


module.exports = NodeHelper.create({
  start: function() {},
  socketNotificationReceived: function(notifcation, payload, sender) {

	const jsdom = require("jsdom");
	const { JSDOM } = jsdom;

	scrapContent: function(){
	JSDOM.fromURL(this.config.url)
		.then((dom) => {
			const document = dom.window.document;
			const nodeList = document.querySelectorAll(this.config.domselector).textContent;);
			this.sendSocketNotification("NodeList", nodeList)
		}
	},
 },
})
