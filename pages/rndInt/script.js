function getRandomInterger() {
    let min = parseInt(document.querySelector(".minValue1").value);
    let max = parseInt(document.querySelector(".maxValue1").value);
    let getOutput = document.querySelector(".output1");

    let generator = Math.floor(Math.random() * (max - min + 1) ) + min;
    getOutput.innerHTML = generator;
}

function shuffle(array) {
    let m = array.length, t, i;
  
    while (m) {
  
      i = Math.floor(Math.random() * m--);
  
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;  
}

function getRandomIntergers() {
    let min = parseInt(document.querySelector(".minValue2").value);
    let max = parseInt(document.querySelector(".maxValue2").value);
    let getOutput = document.querySelector(".output2");
    let array;
    max = max + 1;

    for (array = [], i = min; i < max; ++i) array[i] = i;

    array = shuffle(array);
    const result = array.filter(Boolean)
    console.log(array);

    getOutput.innerHTML = result;
}