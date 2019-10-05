Module.register("MMM-scrape",{
	defaults: {
		url: "https://fm4.orf.at/player/live",
		domselector: "span.playing"
	},
	nodeList:null,
	notificationReceived(notification,payload){
		Log.log("notification received="+notification);
		if(notification == 'ALL_MODULES_STARTED'){
			this.sendSocketNotification("CONFIG",this.config)
			this.sendSocketNotification("getcontent",null)
		}		
	},
  socketNotificationReceived: function(notification,payload){
		  if(notification == 'node_data'){
				nodeList=payload
				this.updateDom(1)
			}
	},
	getDom: function() {
    wrapper=document.createElement("div");
		if(this.nodeList){
			for( let n of this.nodeList ) {
				var w = document.createElement("div");
				w.innerHTML=n.textContent;
				wrapper.appendChild(w)
			}	
		}
		return wrapper;		
	}
});
