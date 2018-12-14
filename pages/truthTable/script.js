function printTable() {
    let getTable = document.querySelector(".tbl");
    let getOp = document.querySelector("#operator");
    let value = getOp[getOp.selectedIndex].value;

    //if statement checks the value user set in the select element and
    //at the click of a button prints the selected truth table
    //writing that much html code in js was a bad idea but my brain wasn't functioning
    //or something when i made this... and changing it now that it's made is not fun

    if (value == "and") {
        getTable.innerHTML = "<h1>AND</h1><table><tr><th>p</th><th>q</th><th>p ∧ q</th></tr><tr><th>1</th><th>1</th><th>1</th></tr><tr><th>1</th><th>0</th><th>0</th></tr><tr><th>0</th><th>1</th><th>0</th></tr><tr><th>0</th><th>0</th><th>0</th></tr></table>";
    } else if (value == "or") {
        getTable.innerHTML = "<h1>OR</h1><table><tr><th>p</th><th>q</th><th>p ∨ q</th></tr><tr><th>1</th><th>1</th><th>1</th></tr><tr><th>1</th><th>0</th><th>1</th></tr><tr><th>0</th><th>1</th><th>1</th></tr><tr><th>0</th><th>0</th><th>0</th></tr></table>";
    } else if (value == "implication") {
        getTable.innerHTML = "<h1>IMPLICATION</h1><table><tr><th>p</th><th>q</th><th>p ⇒ q</th></tr><tr><th>1</th><th>1</th><th>1</th></tr><tr><th>1</th><th>0</th><th>0</th></tr><tr><th>0</th><th>1</th><th>1</th></tr><tr><th>0</th><th>0</th><th>1</th></tr></table>";
    } else if (value == "equality") {
        getTable.innerHTML = "<h1>EQUALITY</h1><table><tr><th>p</th><th>q</th><th>p ↔ q</th></tr><tr><th>1</th><th>1</th><th>1</th></tr><tr><th>1</th><th>0</th><th>0</th></tr><tr><th>0</th><th>1</th><th>0</th></tr><tr><th>0</th><th>0</th><th>1</th></tr></table>";
    }
}