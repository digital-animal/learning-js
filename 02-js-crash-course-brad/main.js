// console.log(window);
// alert("Watch out");
// window.alert("Watch out");
// console.log(document.getElementById('my-form'));
// const doc = document.getElementById('my-form');
// console.log(doc);
// console.log(doc.innerHTML);
// console.log(doc.innerText);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// const doc = document.querySelector('.container');
// console.log(doc);

// console.log(document.querySelectorAll('div'));
// console.log(document.querySelectorAll('li'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach( item => {
//     // console.log(item);
//     // console.log(item.innerText);
//     console.log(item.innerHTML);
// });

// items.forEach( item => console.log(item) );
// items.forEach( item => console.log(item.innerText) );
// items.forEach( item => console.log(item.innerHTML) );

// const list = document.querySelector('.items');
// list.remove();
// list.lastElementChild.remove();
// list.firstElementChild.textContent="Hello";
// list.children[1].innerText = 'Jewel';
// list.lastElementChild.innerHTML = '<h4>Hello</h4>';

// const button = document.querySelector('.btn');
// button.style.backgroundColor = "tomato";

// const header = document.querySelector('h1');
// header.style.color = 'crimson';

// const btn = document.querySelector('.btn');

// // btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     // console.log('click');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     document.querySelector("#my-form").style.background="#4CA950";
//     // document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('body').classList.toggle('bg-dark');

//     document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello World</h1>";
// });

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover',(e)=> {
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello World</h1>";
// });

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout',(e)=> {
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello World</h1>";
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter fields');

        // console.log(nameInput);
        // console.log(nameInput.value);

        msg.classList.add('error');
        // msg.innerHTML='Please enter all fields';
        msg.textContent='Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        // console.log('success');
        
        const textNode = document.createTextNode(`${nameInput.value} : ${emailInput.value}`);
        
        const li = document.createElement('li');
        li.appendChild(textNode);
        userList.appendChild(li);
        
        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    
}