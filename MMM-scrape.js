Module.register("MMM-scrape",{
	defaults: {
		url: "https://fm4.orf.at/player/live",
		domselector: "span.playing",
		loadScripts: "false"
	},
	// place to save the list of nodes sent back from helper
	nodeList:{},
	message:"MMM-scrape starting up",
	// listen for info from runtime 
	notificationReceived(notification,payload){
		Log.log("notification received="+notification);
		// if all modules are running
		if(notification == 'ALL_MODULES_STARTED'){
			// send our confir down to helper to use
			this.sendSocketNotification("CONFIG",this.config)
			// get the playing content
			this.message="MMM-scrape waiting for content from api request"
			this.sendSocketNotification("getcontent",null)
		}
	},
	// helper sends back specific web page nodes scraped
  	socketNotificationReceived: function(notification,payload){
		  if(notification == 'node_data'){
			  Log.log("received content back from helper")
				// save it
				this.content=payload;
				Log.log("there are "+ this.content.length + " elements to display");
				if(this.content.length==0)
					this.message="MMM-scrape No content found for domselector="+this.config.domselector;
				// tell MM we have new stuff to display
				// will cause getDom() to be called
				this.updateDom(1)
			}
	},
	getDom: function() {
		// base wrapper for our conent
    		wrapper=document.createElement("div");
		// if there is some content (not null as at start
		if(this.content.length>0){
			// loop thru the list of nodes (if any)
			for(i=0;i<this.content.length;i++) {
				// create a holde for the text of this node
				let w = document.createElement("div");
				// get the node from the returned object
				let n = this.content[i]
				// get the text node  content
				w.innerHTML=n;
				// append this info to the base wrapper
				wrapper.appendChild(w)
			}
		}
		else{
			wrapper.innerText=this.message
		}
		// tell MM this is our content to add to the MM dom
		return wrapper;
	}
});
