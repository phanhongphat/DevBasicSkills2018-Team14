function binToDec() {
    let getInput = parseInt(document.querySelector(".input2").value);
    let getOutput = document.querySelector(".output2");
    let binToDec = parseInt(getInput, 2).toString(10);
    
    if (isNaN(binToDec)) {
        getOutput.innerHTML = '<i class="fas fa-smile"> Did you input a valid number?</i>'
    } else {
        getOutput.innerHTML = "ANSWER is : " + binToDec;
    }  
}

function binToOct() {
    let getInput = parseInt(document.querySelector(".input2").value);
    let getOutput = document.querySelector(".output2");
    let binToOct = parseInt(getInput, 2).toString(8);
    
    if (isNaN(binToOct)) {
        getOutput.innerHTML = '<i class="fas fa-smile"> Did you input a valid number?</i>'
    } else {
        getOutput.innerHTML = "ANSWER is : " + binToOct;
    } 
}

function binToHex() {
    let getInput = parseInt(document.querySelector(".input2").value);
    let getOutput = document.querySelector(".output2");
    let binToHex = parseInt(getInput, 2).toString(16);
    
    if (isNaN(parseInt(binToHex))) {
        getOutput.innerHTML = '<i class="fas fa-smile"> Did you input a valid number?</i>'
    } else {
        getOutput.innerHTML = "ANSWER is : " + binToHex.toUpperCase();
    } 
}