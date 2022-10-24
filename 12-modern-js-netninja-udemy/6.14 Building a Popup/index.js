const button = document.querySelector('button');
const popup = document.querySelector('div.popup-wrapper');
const close = document.querySelector('div.popup-close');

button.addEventListener('click', e => {
    popup.style.display = 'block';
});

close.addEventListener('click', e => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    popup.style.display = 'none';
});
