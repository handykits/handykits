/* Base 64 Encode and Decode String */
function getInput(){
    let input = document.getElementById("toolInput").value;
    return input;
}

function updateOutput(output){
    document.getElementById('toolOutput').value = output;
}

/*ENCODE*/

jQuery("#encode").click(function(){
    console.log("Attempting to encode string");
    try{
        let output = base64Encode(getInput());
        updateOutput(output);
        console.log("Encode Successful");
    }catch(error){
        console.error.error;
    }
});

function base64Encode(input){
    let output = btoa(input);
    return output;
}

/*DECODE */
jQuery("#decode").click(function(){
    console.log("Attempting to decode string");
    try{
        let output = base64Decode(getInput());
        updateOutput(output);
        console.log("Decode Successful");
    }catch(error){
        console.error.error;
    }
});

function base64Decode(input){
    let output = atob(input);
    return output;
}
