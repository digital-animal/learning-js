//// ===================================================
//// ==========006 DOCUMENT OBJECT MODEL (DOM)==========
//// ===================================================
// console.log(document);
// console.log(document.location);
// console.log(document.URL);

//  const para = document.querySelector('p'); // first p tag, ignoes rest
//  console.log(para);
//  console.log(para.innerText);
 
// const para = document.querySelector('.error');
// console.log(para.innerText);

// const para = document.querySelector('div.error');
// console.log(para.innerText);

// const heading = document.querySelector('body > h1:nth-child(1)');
// // console.log(heading.innerText);
// heading.style.color = "crimson";
// heading.style.backgroundColor = "#4CA950";
// heading.style.padding = "20px";
// heading.style.border = "1px solid #111";
// heading.style.borderRadius = "5px";
// heading.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.3)";

// heading.innerText = "JavaScript DOM";
// heading.innerHTML += `<p>Programming is fun at last..</p>`;

//  const paras = document.querySelectorAll('p');
//  console.log(paras);
//  console.log(typeof paras);
//  console.log("\n");
//  console.log(paras[0]);
//  console.log(paras[1]);
//  console.log(paras[2]);
 
//  paras.forEach(element => console.log(element.innerText));

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// //// get element by ID
// const title = document.getElementById("page-title");
// console.log(title);
// console.log(title.innerText);

// //// get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// console.log(errors[1]);
// console.log(errors.innerText); // undefined
// console.log(errors.innerHTML); // undefined

// //// get element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);
// console.log(paras.innerText); // undefined
// console.log(paras.innerHTML); // undefined

// const para = document.querySelector('p');
// // console.log(para.innerText);
// // para.innerText = "Java & Python";
// para.innerText += "\nJava & Python";

// const paras = document.querySelectorAll('p');
// // paras.forEach( para => console.log(para.innerText));
// paras.forEach( para => para.innerText += "\nProgramming");

// const content  = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML = "<h2>this is new h2</h2>";
// content.innerHTML += "<h2>this is new h2</h2>";
// console.log(content.innerHTML);

//  const people = ["mario","ken","jen"];
//  const list = document.querySelector('.people');
//  list.innerHTML = ``;
//  people.forEach( person => {
//      list.innerHTML += `<li>${person}</li>`;
//  })

//  list.style.listStyleType = "none";
//  list.style.display ="block";
//  list.style.color = "DodgerBlue";
//  list.style.fontSize = "32px";
// //  list.style.backgroundColor = "#4CA950";

// // list.forEach( item => {
// //     item.style.color = "red";
// // }); // changes not applie
// //  console.log(list.innerText);

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href',"https://www.thenetninja.co.uk");
// link.innerText = "TheNetNinja";
// link.setAttribute("target","_blank");

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');

// msg.setAttribute('style', 'color:blue;font-size:30px;');

// const title = document.querySelector('h1');
// // title.setAttribute('style',"margin:50px;") // overwrites previous attribute
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = "40px";
// title.style.color = "blue";
// title.style.fontSize = "50px";
// console.log(title.style.fontSize);
// title.style.margin = "";

// const content = document.querySelector('p');
// console.log(content.classList);
// // content.classList.add('green');
// // console.log(content.classList);
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach( para => {
    console.log(para.innerText);
    console.log(para.textContent);
    
    if(para.textContent.includes('success')){
        para.classList.add('success');
    }

    // if(para.innerText.includes('success')){
    //     para.classList.add('success');
    // }

    if(para.textContent.includes('error')){
        para.classList.add('error');
    }

    // if(para.innerText.includes('error')){
    //     para.classList.add('error');
    // }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
