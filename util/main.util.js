/*SNACKBAR*/
function showSnackbar(message) {
	// Get the snackbar DIV
	var x = document.getElementById("snackbar");
	x.innerHTML = message;
	// Add the "show" class to DIV
	x.className = "show";
	// After 3 seconds, remove the show class from DIV
	setTimeout(function () {
		x.className = x.className.replace("show", "");
	}, 3000);
}

/*CLIPBOARD COPY
get Outputvalue when outbout text is clicked
*/
jQuery('#toolOutput').click(function(){
       let outputStr = jQuery("#toolOutput").val();
       copyToClipboard(outputStr);
    	console.log("Copied to Clipboard.");
       });

const copyToClipboard = str => {
	console.log("Attempting to copy string: " + str);
	showSnackbar("Copied to Clipboard");
	const el = document.createElement('textarea'); // Create a <textarea> element
	el.value = str; // Set its value to the string that you want copied
	el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
	el.style.position = 'absolute';
	el.style.left = '-9999px'; // Move outside the screen to make it invisible
	document.body.appendChild(el); // Append the <textarea> element to the HTML document
	const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) // Store selection if found
		: false; // Mark as false to know no selection existed before
	el.select(); // Select the <textarea> content
	document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
	document.body.removeChild(el); // Remove the <textarea> element
	if (selected) { // If a selection existed before copying
		document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
		document.getSelection().addRange(selected); // Restore the original selection
	}
};
