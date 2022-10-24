var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//// form sumbit event
form.addEventListener('submit',addItem);
//// delete event
itemList.addEventListener('click',removeItem);
//// filter event
filter.addEventListener('keyup',filterItems);

//// add item
function addItem(e){
    e.preventDefault();
    // console.log(1);

    //// get input value
    var newItem = document.getElementById("textInput").value;

    //// create new li element

    var li = document.createElement("li");
    
    //// add class
    li.className = "item";
    // console.log(li);

    //// add text node with input value
    //// li.innerHTTML += newItem; //

    newNode = document.createTextNode(newItem);
    li.appendChild(newNode);
    //// create delete button element

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn";

    //// create and append text node for button
    var btnNode = document.createTextNode("x");
    deleteBtn.appendChild(btnNode);

    //// append button to li
    li.appendChild(deleteBtn);

    //// append li to list
    itemList.appendChild(li);
}

//// remove item function

function removeItem(e) {

    if(e.target.classList.contains("btn")){
        // console.log(1); // debugging
        if(confirm("Are you sure? ")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}

//// filter items

function filterItems(e){
    // converting all text to lowercase
    var text  = e.target.value.toLowerCase();
    // console.log(text); // debugging
    // get item list
    var items = itemList.getElementsByTagName('li');
    // console.log(typeof items); // debugging
    //// covert to array
    Array.from(items).forEach(function (item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName); // debugging
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}