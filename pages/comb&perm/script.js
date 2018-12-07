function factorial(num) {
    let result = num;

    if (num === 1 | num === 0) {
        return 1;
    }

    while (num > 1) {
        num--;
        result = result * num;
    }

    return result;
}

function combination() {
    let getN = parseInt(document.querySelector(".n1").value);
    let getR = parseInt(document.querySelector(".r1").value);
    let getOutput = document.querySelector(".output1");

    if (getR > getN) {
        getOutput.innerHTML = '<h4>ANSWER is : DO NOT...Pls,Type again...!!!</h4>'
    } else {
        let finalResult = parseInt(factorial(getN)/(factorial(getR) * factorial(getN - getR)));
        getOutput.innerHTML = 'ANSWER is : '  + finalResult;
    }
}

function permutation() {
    let getN = parseInt(document.querySelector(".n2").value);
    let getK = parseInt(document.querySelector(".k2").value);
    let getOutput = document.querySelector(".output2");

    if (getK > getN) {
        getOutput.innerHTML = '<h4>ANSWER is : DO NOT...Pls,Type again...!!!</h4>'
    } else {
        let finalResult = parseInt(factorial(getN)/(factorial(getN - getK)));
        getOutput.innerHTML = 'ANSWER is : '  + finalResult;
    }
}
