function hexToDec() {
    let getInput = document.querySelector(".input4").value;
    let getOutput = document.querySelector(".output4");
    let hexToDec = parseInt(getInput, 16).toString(10);
    
    if (isNaN(hexToDec)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = hexToDec;
    }
}

function hexToBin() {
    let getInput = document.querySelector(".input4").value;
    let getOutput = document.querySelector(".output4");
    let hexToBin = parseInt(getInput, 16).toString(2);

    if (isNaN(hexToBin)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = hexToBin;
    }
}

function hexToOct() {
    let getInput = document.querySelector(".input4").value;
    let getOutput = document.querySelector(".output4");
    let hexToOct = parseInt(getInput, 16).toString(8);

    if (isNaN(hexToOct)) {
        getOutput.innerHTML = "Did you input a valid number?"
    } else {
        getOutput.innerHTML = hexToOct;
    }
}