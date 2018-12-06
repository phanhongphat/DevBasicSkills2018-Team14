function openCloseTable() {
    let getTable = document.querySelector(".table");
    let getButton = document.querySelector(".button");
    
    if (getTable.innerHTML == '<img src="./img/table.png">') {
        getTable.innerHTML = '<div class="table"></div>';
        getButton.innerHTML = '<button class="btn btn-danger" onclick="openCloseTable()">Open Table</button>'
    } else {
        getTable.innerHTML = '<img src="./img/table.png">';
        getButton.innerHTML = '<button class="btn btn-danger" onclick="openCloseTable()">Close Table <i class="fas fa-window-close"></i></button>';
    }
}