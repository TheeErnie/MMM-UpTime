MMM-UpTime

Author: TheeErnie

Description: displays the runtime of the current MM session 

Features:
	-Very straightforward with no configuration options on v1.0
	-Future-life has possibilies for more functionality & asthetic options
	
Install Directions on Linux:

	*Press green "code" button and copy the shown URL
	*Open a terminal and enter the following command:
			cd MagicMirror/modules/
	*Press "Enter"
	*Type the following command and replace "<URL>" with the URL for the module:
			git clone <URL>
	*Press "Enter"
	
	Now the module is installed and must be configured
	
	*Type the following command:
			cd ../config/
	*Press "Enter"
	*Open the "config.js" file with prefered editor or type the following command:	
			nano config.js
	*Press "Enter" if you used this command
	*In the editor type the following in the modules configuration section (Hint: you will see other text in a similar format):

	{
		module: "MMM-UpTime",
		position: "bottom_left",
	},

	*Change the position to meet your preferences
	*Save config.js file and exit ([ctr]+[x] then follow prompts in nano editor)
	*Launch MM by entering the following command:
			npm run start
	*Press "Enter"
	*Mirror should launch with new module installed and active
	

