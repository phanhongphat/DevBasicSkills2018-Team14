function openCloseTable() {
    let getTable = document.querySelector(".table");
    let getButton = document.querySelector(".button");
    
    if (getTable.innerHTML == '<img src="./img/table.png">') {
        getTable.innerHTML = '<div class="table"></div>';
        getButton.innerHTML = '<button class="btn" onclick="openCloseTable()">Open table</button>'
    } else {
        getTable.innerHTML = '<img src="./img/table.png">';
        getButton.innerHTML = '<button class="btn" onclick="openCloseTable()">Close table</button>';
    }
}