function decToBin() {
    let getInput = parseInt(document.querySelector(".input1").value);
    let getOutput = document.querySelector(".output1");
    let decToBin = parseInt(getInput, 10).toString(2);
    
    if (isNaN(decToBin)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = decToBin;
    }
}

function decToOct() {
    let getInput = parseInt(document.querySelector(".input1").value);
    let getOutput = document.querySelector(".output1");
    let decToOct = parseInt(getInput, 10).toString(8);
    
    if (isNaN(decToOct)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = decToOct;
    }
}

function decToHex() {
    let getInput = parseInt(document.querySelector(".input1").value);
    let getOutput = document.querySelector(".output1");
    let decToHex = parseInt(getInput, 10).toString(16);
    
    if (isNaN(parseInt(decToHex))) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = decToHex.toUpperCase();
    }
}