// console.log(document);

// /// ge element by id
// console.log(document.getElementById('page-banner'));

// const banner = document.getElementById('page-banner');
// console.log(banner);

// var bookList = document.getElementById('book-list');
// console.log(bookList);

//// get elements by class or tag name

// console.log(document.getElementsByClassName('title'));

// const titles = document.getElementsByClassName('title');
// console.log(titles);
// console.log(titles[0]);
// console.log(titles[1]);

// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// console.log(lis[1]);

// for(let i=0;i<lis.length;i++){
//     console.log(lis[i]);
//     // console.log(lis[i].innerHTML);
// }

// // lis.forEach( element => console.log(element)); //// not working
// for(let i in lis){
//     console.log(lis[i]);
// }

// console.log(Array.isArray(lis));
// console.log(Array.isArray(Array.from(lis)));

// Array.from(lis).forEach( element => console.log(element)); //// now working

// const wrap = document.querySelector((' #wrapper'));
// console.log(wrap);

// const wmf = document.querySelector('#book-list > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1)');
// console.log(wmf);

// const books = document.querySelector('#book-list li.name');
// console.log(books);

// const bookList = document.querySelectorAll('#book-list .name');
// console.log(bookList);

// // bookList.forEach( book => console.log(book));
// Array.from(bookList).forEach( book => console.log(book));

// const bookList = document.querySelectorAll('#book-list .name');
// // Array.from(bookList).forEach( book => console.log(book.innerText));
// // bookList.forEach( book => console.log(book.textContent));
// bookList.forEach( book => book.textContent += ' (book title)');

// const books = document.querySelector("#book-list");
// console.log(books.innerHTML);

// books.innerHTML = "<h2>Books and more books</h2>";
// books.innerHTML += "<p>Books and more books</p>";

// const banner = document.querySelector("#page-banner");
// console.log(banner.nodeType);
// console.log(banner.nodeName);
// console.log(banner.hasChildNodes());


// const clonedBanner = banner.cloneNode(false);
// // const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//// traversing the DOM - part 1, parent and child
// const bookList = document.querySelector("#book-list");
// console.log(bookList.parentNode);
// console.log(bookList.parentElement); 
// console.log(bookList.parentElement.parentElement); 

// console.log(bookList.childNodes);
// console.log(bookList.children);

//// traversing the DOM - part 2, siblings

// const bookList = document.querySelector("#book-list");
// console.log(bookList.nextElementSibling);
// console.log(bookList.previousElementSibling);

// console.log(bookList.nextSibling);
// console.log(bookList.previousSibling);

// console.log(bookList.previousElementSibling.querySelector('p').innerText);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else';

//// dom events

// var h2 = document.querySelector("#book-list h2");
// console.log(h2);
// h2.addEventListener('click', function(e) {
//     console.log(e.target);
//     console.log(e);
// }); 

// // //// DELETE BUTTON
// var btns = document.querySelectorAll('#book-list .delete');

// btns.forEach( btn => {
//     btn.addEventListener('click', e => {
//         // console.log(e.target);
//         // console.log(e);

//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);

//     });
// });

// //// preventDefault example

// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.textContent);
// });

// //// event bubbling

const list = document.querySelector('#book-list ul');
list.addEventListener('click', e => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        list.removeChild(li);
    }
});

//// interacting with forms.. submit event

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms[1]);
// console.log(document.forms['search-books']);
// console.log(document.forms['add-book']);

//// add book to list
const addForm  = document.forms['add-book'];
addForm.addEventListener('submit', e=> {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;
    // console.log(value);

    //// create elements
    const li = document.createElement('li');

    const bookName = document.createElement('span');
    bookName.textContent = value;
    bookName.classList.add("name");

    const deleteBtn  = document.createElement('span');
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete");
    

    //// append to dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    
    list.appendChild(li);

});

//// changing attributes in DOM

var book = document.querySelector('li:first-child .name');
console.log(book);
console.log(book.getAttribute('class'));

//// change even in DOM

var hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', e => {
    if(hideBox.checked){
        list.style.display = 'none';
    }
    else {
        // list.style.display = "block";
        list.style.display = "initial";
    }
});

//// searching using keyup event
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', e => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach( book => {
        const title = book.firstElementChild.texteContent;
        
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
        }
        else {
            book.style.display = "none";
        }
    });
});