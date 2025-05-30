'use strict'
let count = 0;
const output = document.getElementsByClassName("count")[0];
function changeCount(button, action) {
    const item = button.closest('.item');
    const counter = item.querySelector('.count');
    let count = parseInt(counter.textContent);

    

    if (action === 'add') count++;
    else if (action === 'remove' && count > 0) count--;

    counter.textContent = count;
}

 let cartWindow = null;

function addToCart(button) {
    const item = button.closest('.item');
    const id = item.dataset.id;
    const price = item.dataset.price;
    const imgSrc = item.querySelector('.item__image-picture').src;
    const volume = parseFloat(item.dataset.volume);
    const count = parseInt(item.querySelector('.count').textContent);
    const name = item.querySelector('.item__add-description')?.textContent || 'Без названия';

    if (count <= 0 || isNaN(count)) {
        alert("Выберите количество перед добавлением.");
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(product => product.id === id);

    if (existingItem) {
        existingItem.count += count;
    } else {
        cart.push({ id, name, price, volume, count, imgSrc });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (!cartWindow || cartWindow.closed) {
        cartWindow = window.open('cart.html', '_blank');
    } else {
        cartWindow.focus();
    }
    
}