// ================================================
// ============DOM Crash Course Part I=============
// ================================================
// console.log(document);
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[15]);
// document.all[15].textContent = "Item List";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//// getElementById

// console.log(document.getElementById('header'));
// console.log(document.getElementById('main'));
// console.log(document.getElementById('form'));
// console.log(document.getElementById('items'));

// let headerTitle = document.getElementById('title');
// console.log(headerTitle);
// headerTitle.style.color = "crimson";
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";

// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// headerTitle.innerHTML += "<p>lorem ipsum dolor emet</p>";
// console.log(headerTitle.innerText);
// console.log(headerTitle.innerHTML);

// headerTitle.style.border = "1px solid black";
// headerTitle.style.fontSize = "60px";

//// getElementsByClassName

// console.log(document.getElementsByClassName('container'));
// console.log(document.getElementsByClassName('title'));
// console.log(document.getElementsByClassName('item'));

// const container = document.getElementsByClassName('container');
// console.log(container);
// console.log(container[0]);
// console.log(typeof container);
// console.log(container[0].innerHTML);

// // container[0].innerHTML = "";
// container[0].style.backgroundColor = "tomato";
// container[0].style.color = "blue";
// container[0].style.fontStyle = "italic";

// const items = document.getElementsByClassName('item');
// console.log(items);
// for(let i=0;i<items.length;i++){
//     // items[i].textContent = i+1;
//     items[i].style.backgroundColor = "tomato";
//     // items[i].style.backgroundColor = `#${i}${i+1}${i+2}`;
// }

//// getElementsByTagName

// let listItem = document.getElementsByTagName('li');

// for(let i=0;i<listItem.length;i++) {
//     listItem[i].style.backgroundColor = "#4CA950";
//     // listItem[i].style.fontStyle = "italic";
//     // listItem[i].style.padding = "30px";
//     // listItem[i].style.display = "inline";
//     listItem[i].innerText = i+1;
//     listItem[i].style.display = "none";

// }

//// QUERY SELECTORS //

// console.log(document.querySelector('title'));
// console.log(document.querySelector('meta'));

// let header = document.querySelector('#title');
// header.style.backgroundColor = "crimson";
// header.style.border = "1px solid black";

// var input = document.querySelector('form > input');
// // input.style.backgroundColor = "#4CA950";
// input.value = "Hello World";

// var input = document.querySelector('form > input[type=text]');
// input.style.backgroundColor = "#4CA950";

// var input = document.querySelector('form > input[type=submit]');
// input.style.backgroundColor = "#4CA950";

// var input = document.querySelectorAll('form > input');
// input[1].style.backgroundColor = "#4CA950";

// var submit = document.querySelector('input[type=submit]');
// submit.value = "Send";
// submit.value = "Save";

// var item = document.querySelector('.item');
// item.style.color = "red";

// var lastItem = document.querySelector('.item:last-child');
// lastItem.style.backgroundColor = "#4CA950";
// lastItem.style.color = "blue";


// var secondItem = document.querySelector('.item:nth-child(2)');
// secondItem.style.backgroundColor = "coral";
// secondItem.style.color = "blue";


//// QUERY SELECTOR ALL //

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// console.log(odd);
// for(var i=0;i<odd.length;i++) {
//     odd[i].style.backgroundColor = "coral";
// }
// for(var i=0;i<even.length;i++) {
//     even[i].style.backgroundColor = "magenta";
// }

// ================================================
// ============DOM Crash Course Part II============
// ================================================

// var itemList = document.querySelector('#items');
// console.log(itemList);

//// PARENT NODE //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "tomato";
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = "DodgerBlue";
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = "crimson";

// //// PARENT ELEMENT //
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "tomato";
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.parentElement.style.backgroundColor = "DodgerBlue";
// console.log(itemList.parentElement.parentElement.parentElement);
// itemList.parentElement.parentElement.parentElement.style.backgroundColor = "crimson";

// //// CHILD NODES
// console.log(itemList.childNodes); /// returns Nodelist of child

// //// CHILDREN
// console.log(itemList.children);
// console.log(itemList.children[0]);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// //// FIRST CHILD
// console.log(itemList.firstChild);

// //// FIRST ELEMENT CHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'HELLO';

// //// LAST CHILD
// console.log(itemList.lastChild);

// //// LAST ELEMENT CHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Goodbye';

//// SIBLINGS

// //// NEXT SIBLING
// console.log(itemList.nextSibling);

// //// NEXT ELEMENT SIBLING
// console.log(itemList.nextElementSibling);

// //// previous SIBLING
// console.log(itemList.previousSibling);

// //// previous ELEMENT SIBLING
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = "#4CA950";
// itemList.previousElementSibling.style.color = "crimson";


//// CREATE ELEMENT

// //// create a new div
// var newDiv = document.createElement('div');
// console.log(newDiv);
// //// add aclass
// newDiv.className = "hello";
// //// add id
// newDiv.id = "hi";
// //// add attributes
// newDiv.setAttribute('title',"hello div");
// // console.log(newDiv.getAttribute('id'));
// /// create text node
// var newDivText = document.createTextNode("Hello World");
// //// add text to div
// newDiv.appendChild(newDivText);
// // console.log(newDiv.innerHTML); 

// // //// adding node as last child //
// // var body = document.querySelector('body');
// // body.appendChild(newDiv);
// // console.log(body.innerHTML);

// // //// appending a node in a particular position //
// var header = document.querySelector('header');
// var h1 = document.querySelector('header h1');
// header.insertBefore(newDiv,h1);

// // // header.appendChild(newDiv); // inserts as last node of header

// // console.log(header.innerHTML);


// ================================================
// ===========DOM Crash Course Part III============
// ================================================

//// EVENT LISTENER
//// adding event listener //

// var button = document.getElementById("button").addEventListener('click', function() {
//     console.log(123);
// });

// var button = document.getElementById("button").addEventListener('click',buttonClick);

//// function for button click
// function buttonClick() {
//     // console.log("Button clicked");
//     // document.getElementById('header').textContent = "Changed";
//     // document.querySelector('header h1').textContent = "Changed";
//     // document.getElementById('header').style.backgroundColor = "salmon";
//     document.querySelector("#main").style.backgroundColor = "crimson";

// }

// function buttonClick(e) {
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

//     var output = document.getElementById("output");
//     // output.innerHTML = `<h3>${e.target.id}</h3>`;

//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // console.log(e.clientX, e.clientY)
//     // console.log(`(${e.clientX}, ${e.clientY})`); // absolute
//     // console.log(`(${e.offsetX}, ${e.offsetY})`); // relative

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }


//// mouse actions 
//// mouse events


// var button = document.getElementById('button');

//// single click
// button.addEventListener('click',runEvent);

//// double click
// button.addEventListener('dblclick',runEvent);

//// mouse down
// button.addEventListener('mousedown',runEvent);

//// mouse up
// button.addEventListener('mouseup',runEvent);

// function runEvent(e) {
//     console.log('EVENT TYPE: '+e.type);
// }

// //// mouseenter + mouseout
// var box = document.getElementById("box");
// //// mouseenter
// // box.addEventListener("mouseenter",runEvent);
// //// mouseleave
// // box.addEventListener("mouseleave",runEvent);
// //// mouseover
// // box.addEventListener("mouseover",runEvent);
// //// mouseout
// // box.addEventListener("mouseout",runEvent);
// //// mousemove
// box.addEventListener("mousemove", runEvent);

// var out = document.getElementById("out");

// function runEvent(e) {
//     console.log('EVENT TYPE: '+e.type);

//     // out.innerHTML = `<h3>(${e.offsetX},${e.offsetY})</h3>`;
//     // out.innerHTML += `<h3>(${e.offsetX},${e.offsetY})</h3>`;

//     // box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;

// }


// // //// KEYBOARD EVENTS
// var itemInput = document.querySelector('input[type=text]')
// var form = document.querySelector('form');
// var select = document.querySelector('select');
// // itemInput.addEventListener('keydown',runEvent);
// // itemInput.addEventListener('keyup',runEvent);
// // itemInput.addEventListener('keypress',runEvent);

// // itemInput.addEventListener('focus',runEvent);
// // itemInput.addEventListener('blur',runEvent);

// // itemInput.addEventListener('cut',runEvent);
// // itemInput.addEventListener('copy',runEvent);
// // itemInput.addEventListener('paste',runEvent);

// // itemInput.addEventListener('input',runEvent);
// // select.addEventListener('change',runEvent);
// // itemInput.addEventListener('change',runEvent);
// form.addEventListener('submit',runEvent)
// function runEvent(e) {

//     e.preventDefault();
//     console.log('EVENT TYPE: '+e.type);
//     console.log(e.target.value);
//     // document.getElementById('out').innerHTML = `<h3>${e.target.value}<h3>`;
//     // document.body.style.display = "none";
// }

