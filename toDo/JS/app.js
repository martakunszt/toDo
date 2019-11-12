//alert("Yo!");

let button = document.getElementById("add");
let textBox = document.getElementById("input");
let remove = document.getElementById("delete");


function addItem (){
    //alert("I'm adding an item");
    let item = textBox.value; 
    let listItem = document.createElement("li");
    let list = document.getElementById("todo");
    listItem.innerHTML = item;
    list.appendChild(listItem);
    //alert(item)
}
button.addEventListener("click",addItem);



let items = document.querySelectorAll("#todo li"),
tab = [], liIndex;

for(var i = 0; i<items.length; i++){
    tab.push(items[i].innerHTML);
}

for(var i = 0; i < items.length; i++){
    items[i].onclick = function(){
        liIndex = tab.indexOf(this.innerHTML)
        console.log(this.innerHTML + "INDEX = " +liIndex)
    };
}

function removeLI(){
    items[liIndex].parentNode.removeChild(items[liIndex]);
}