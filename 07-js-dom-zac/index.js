// //// getting the parent of a node

// var h1 = document.querySelector('h1');
// var h1ParentEl = h1.parentElement;
// var h1ParentNode = h1.parentNode;

// console.log(h1ParentEl);
// console.log(h1ParentNode);

// console.log(h1ParentNode.parentNode);

// //// getting children / child of a node

// var content = document.querySelector('.content');
// var childrenElement = content.children;
// var childrenNode = content.childNodes;

// var firstChildElement = content.firstElementChild;
// var firstChildNode = content.firstChild;

// var lastChildElement = content.lastElementChild;
// var lastChildNode = content.lastChild;

// // console.log(content);
// // console.log(childrenElement);
// // console.log(childrenNode);
// // console.log(firstChildElement);
// // console.log(firstChildNode);
// // console.log(lastChildElement);
// // console.log(lastChildNode);

// console.log(childrenElement.length);
// console.log(childrenNode.length);
// console.log(firstChildElement.nodeType);
// console.log(firstChildElement.nodeType);
// console.log(lastChildElement.nodeType);
// console.log(lastChildElement.nodeType);

// //// getting sibling of a node
// var contact = document.getElementById('contact');
// var contactPrev = contact.previousSibling;
// var contactNext = contact.nextSibling;
// var contactPrevEl = contact.previousElementSibling;
// var contactNextEl = contact.nextElementSibling;

// console.log(contactPrev,contactNext);
// console.log(contactPrevEl, contactNextEl);

// console.log(contactPrev.nodeType);
// console.log(contactPrevEl.nodeType);
// console.log(contactNext.nodeType);
// console.log(contactNextEl.nodeType);

//// creating nodes in DOM, text and element nodes
//// append child node to a parent node

// var pText = document.createTextNode("Lorem ipsum..");
// var pElement = document.createElement('p');
// pElement.appendChild(pText);

// // console.log(pText.nodeType);
// // console.log(pText.nodeValue);
// // console.log(pElement.nodeType);
// // console.log(pElement.innerHTML);
// // console.log(pElement.innerText);
// // console.log(pElement.textContent);

// var container = document.querySelector('footer.content');
// container.appendChild(pElement);

// console.log(container.outerHTML);
// console.log(container.innerHTML);
// console.log(container.childNodes.length);
// console.log(container.childNodes[0].nodeValue)

// //// creating a link node inside an element
// var aText = document.createTextNode("Read more..");
// var aEl = document.createElement('a');
// aEl.appendChild(aText);
// // aEl.innerText = "Read More....";
// aEl.setAttribute("href","#link");

// var pText = document.createTextNode("Learn More about the DOM ");
// var pEl = document.createElement('p');
// pEl.appendChild(pText);
// pEl.appendChild(aEl);

// console.log(aEl);
// console.log(pEl);
// console.log(pEl.outerHTML);

// let div = document.querySelector('div.content:nth-child(2)');
// div.appendChild(pEl);
// console.log(div.outerHTML);
// console.log(div.innerHTML);

// //// document fragment example

// var divEl = document.createElement('div'),
//     docFrag = document.createDocumentFragment(),
//     p1Text = document.createTextNode('Lorem '),
//     p1El = document.createElement('p'),
//     p2Text = document.createTextNode("Ipsum "),
//     p2El = document.createElement('p'),
//     p3Text = document.createTextNode("Maximus "),
//     p3El = document.createElement("p");

// p1El.appendChild(p1Text);
// p2El.appendChild(p2Text);
// p3El.appendChild(p3Text);

// docFrag.appendChild(p1El);
// docFrag.appendChild(p2El);
// docFrag.appendChild(p3El);

// // console.log(docFrag);
// // console.log(docFrag.nodeType);
// // console.log(docFrag.nodeValue;


// divEl.appendChild(docFrag);
// // console.log(divEl.outerHTML);

// var body = document.querySelector('body');
// body.appendChild(divEl);
// console.log(body.outerHTML);

// //// adding note to the DOM

// var parent = document.querySelector('div.content:nth-child(2)');
// var child = document.createElement('h3');
// var afterChild = document.querySelector('#contact');
// child.innerText = "Welcome to JS DOM";

// parent.insertBefore(child, afterChild);
// console.log(parent.outerHTML);

// //// achieving insertAfter using insertBefore + nextSibling

// var content = document.querySelector('.content'),
//     firstP = content.children[1],
//     pText = document.createTextNode("Newum");
//     pEl = document.createElement('p'),
//     afterNode = firstP.nextSibling;

// pEl.appendChild(pText);
// content.insertBefore(pEl, afterNode);

// console.log(content.outerHTML);


//// replaceChild

var content = document.querySelector('.content'),
    firstP = content.children[1],
    pText = document.createTextNode("Newum");
    pEl = document.createElement('p'),
    replaceNode = document.querySelector('#contact');

pEl.appendChild(pText);
content.replaceChild(pEl, replaceNode);

console.log(content.outerHTML);


