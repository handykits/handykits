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

/*CLIPBOARD COPY*/

const copyToClipboard = str => {
	console.log("Attempting to copy string: " + str);
	showSnackbar("Copied to Clipboard");
	const el = document.createElement('textarea'); 
	el.value = str; 
	el.setAttribute('readonly', ''); 
	el.style.position = 'absolute';
	el.style.left = '-9999px'; 
	document.body.appendChild(el); 
	const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) 
		: false;
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el); 
	if (selected) {
		document.getSelection().removeAllRanges(); 
		document.getSelection().addRange(selected); 
	}
};
/*
get Outputvalue when outbout text is clicked
*/
jQuery('#toolOutput').click(function(){
       let outputStr = jQuery("#toolOutput").val();
	/*only copy to clipboard if box is not empty*/
	console.log(outputStr);
	if(outputStr !== ""){
       		copyToClipboard(outputStr);
    		console.log("Copied to Clipboard.");
		}
       });

