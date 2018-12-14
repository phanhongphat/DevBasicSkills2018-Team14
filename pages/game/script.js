function numberGame() {
    let getUserInput = parseInt(document.querySelector("#input").value);
    let getComputerNum = document.querySelector(".computer-number");
    let getWhoWins = document.querySelector(".who-wins");
    let compNum = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;

    //input validation and result printing
    if (isNaN(getUserInput)) {
        getWhoWins.innerHTML = "<h4>Did you input a valid number?</h4>"
    } else {
        if (compNum > getUserInput) {
            getComputerNum.innerHTML = "Computer's number: " + compNum;
            getWhoWins.innerHTML = "<h4>You lose!</h4>"
        } else if (compNum < getUserInput) {
            getComputerNum.innerHTML = "Computer's number: " + compNum;
            getWhoWins.innerHTML = "<h4>You win!</h4>"
        } else if (compNum === getUserInput) {
            getComputerNum.innerHTML = "Computer's number: " + compNum;
            getWhoWins.innerHTML = "<h4>You both had the same number! No one wins!</h4>"
        }
    }
}