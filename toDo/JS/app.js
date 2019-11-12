//alert("Yo!");

let button = document.getElementById("add");
let textBox = document.getElementById("input");

function addItem (){
    alert("I'm adding an item");
    let item = textBox.value; 
    let listItem = document.createElement("li");
    let list = document.getElementById("todo");
    listItem.innerHTML = item;
    list.appendChild(listItem);
    //alert(item)
}
button.addEventListener("click",addItem);



