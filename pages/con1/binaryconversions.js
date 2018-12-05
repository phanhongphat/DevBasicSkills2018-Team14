function binToDec() {
    let getInput = parseInt(document.querySelector(".input2").value);
    let getOutput = document.querySelector(".output2");
    let binToDec = parseInt(getInput, 2).toString(10);
    
    if (isNaN(binToDec)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = binToDec;
    }  
}

function binToOct() {
    let getInput = parseInt(document.querySelector(".input2").value);
    let getOutput = document.querySelector(".output2");
    let binToOct = parseInt(getInput, 2).toString(8);
    
    if (isNaN(binToOct)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = binToOct;
    } 
}

function binToHex() {
    let getInput = parseInt(document.querySelector(".input2").value);
    let getOutput = document.querySelector(".output2");
    let binToHex = parseInt(getInput, 2).toString(16);
    
    if (isNaN(parseInt(binToHex))) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = binToHex.toUpperCase();
    } 
}