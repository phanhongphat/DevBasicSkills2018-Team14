function octToDec() {
    let getInput = parseInt(document.querySelector(".input3").value);
    let getOutput = document.querySelector(".output3");
    let octToDec = parseInt(getInput, 8).toString(10);
    
    if (isNaN(octToDec)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = octToDec;
    }
}

function octToBin() {
    let getInput = parseInt(document.querySelector(".input3").value);
    let getOutput = document.querySelector(".output3");
    let octToBin = parseInt(getInput, 8).toString(2);
    
    if (isNaN(octToBin)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = octToBin;
    }
}

function octToHex() {
    let getInput = parseInt(document.querySelector(".input3").value);
    let getOutput = document.querySelector(".output3");
    let octToHex = parseInt(getInput, 8).toString(16);
    
    if (isNaN(parseInt(octToHex))) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = octToHex.toUpperCase();
    }
}