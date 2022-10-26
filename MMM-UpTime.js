//===============================================
//=========== UpTime MM Module ==================
//=========== Author: TheeErnie =================
//=========== Functionality:          ===========
//===========     output the run-time ===========
//===========     of MM session       ===========
//===============================================

Module.register("MMM-UpTime", {
	defaults: {
		text: "Mirror Session Runtime:",
		classes: 'medium',
		time: 0,
		label: "seconds"
	},

	//using start to update every second
	//might not be the most fault-tolerant since
	//it does not base the time off of a set time server
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);
	},


	getDom: function () {
		//string variable to insert time into
		var output = "";

		//increment time and set it to more readable variable
		this.defaults.time++;			
		let time = this.defaults.time;
	
		//initializing and setting variables for each time unit
		var years   = Math.floor( time / 31536000);
		var weeks   = Math.floor((time % 31536000) / 604800);
		var days    = Math.floor((time % 604800)   / 86400);
		var hours   = Math.floor((time % 86400)    / 3600);
		var minutes = Math.floor((time % 3600)     / 60);
		var seconds = time % 60;
		
		//adding each time unit & label to output string if > 0
		if(years)   output +=   (years.toString() + "y ");
		if(weeks)   output +=   (weeks.toString() + "w ");
		if(days)    output +=    (days.toString() + "d ");
		if(hours)   output +=   (hours.toString() + "h ");
		if(minutes) output += (minutes.toString() + "m ");
		output += (seconds.toString() + "s");
	
		//creating wrappers
		var wrapper = document.createElement("div");
		var time_wrapper = document.createElement("div");
		
		//adding text into wrappers & appending into main wrapper
		wrapper.innerHTML = this.defaults.text;
		time_wrapper.innerHTML = output;
		wrapper.appendChild(time_wrapper);
    
    	//return final output
		return wrapper;
   },
});
