function octToDec() {
    let getInput = parseInt(document.querySelector(".input3").value);
    let getOutput = document.querySelector(".output3");
    let octToDec = parseInt(getInput, 8).toString(10);
    
    if (isNaN(octToDec)) {
        getOutput.innerHTML = '<i class="fas fa-smile"> Did you input a valid number?</i>'
    } else {
        getOutput.innerHTML = "ANSWER is : " + octToDec;
    }
}

function octToBin() {
    let getInput = parseInt(document.querySelector(".input3").value);
    let getOutput = document.querySelector(".output3");
    let octToBin = parseInt(getInput, 8).toString(2);
    
    if (isNaN(octToBin)) {
        getOutput.innerHTML = '<i class="fas fa-smile"> Did you input a valid number?</i>'
    } else {
        getOutput.innerHTML = "ANSWER is : " + octToBin;
    }
}

function octToHex() {
    let getInput = parseInt(document.querySelector(".input3").value);
    let getOutput = document.querySelector(".output3");
    let octToHex = parseInt(getInput, 8).toString(16);
    
    if (isNaN(parseInt(octToHex))) {
        getOutput.innerHTML = '<i class="fas fa-smile"> Did you input a valid number?</i>'
    } else {
        getOutput.innerHTML = "ANSWER is : " + octToHex.toUpperCase();
    }
}