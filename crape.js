Module.register("MMM-crape",{
	defaults: {
		url: "https://fm4.orf.at/player/live"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.url;
		return wrapper;
	}
});
