'use strict'
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.textContent = 'Корзина пуста';
        const empty = document.createElement('img');
        empty.src = ('img/sad-cart.png')
        empty.classList.add('empty-cart');
        cartList.appendChild(empty);

        const oldTotal = document.querySelector('.totalPrice');
        if (oldTotal) oldTotal.remove();
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const product = document.createElement('div');
        product.classList.add('cart-item');
        product.dataset.id = item.id;

        const img = document.createElement('img');
        img.classList.add('product-image-picture')
        img.src = item.imgSrc;

        const name = document.createElement('span');
        name.classList.add('product-name')
        name.textContent = item.name;

        const volume = document.createElement('span');
        volume.classList.add('product-volume');
        volume.textContent = `${item.volume}`;

        const price = document.createElement('span');
        price.textContent = `$ ${item.price}`;

        const minusBtn = document.createElement('button');
        minusBtn.classList.add('minus-button');
        minusBtn.textContent = '-';
        minusBtn.onclick = () => updateItemCount(item.id, -1);

        const count = document.createElement('span');
        count.classList.add('count');
        count.textContent = `${item.count}`

        const plusBtn = document.createElement('button');
        plusBtn.classList.add('plus-button');
        plusBtn.textContent = '+';
        plusBtn.onclick = () => updateItemCount(item.id, 1);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-button');
        deleteBtn.textContent = 'удалить';
        deleteBtn.onclick = () => removeItem(item.id);

        const productImageName = document.createElement('div');
        productImageName.classList.add('product__image-name')

        const infoGroup = document.createElement('div');
        infoGroup.classList.add('info-group');

        productImageName.appendChild(img);
        productImageName.appendChild(name);
        productImageName.appendChild(volume);
        infoGroup.appendChild(price);
        infoGroup.appendChild(minusBtn);
        infoGroup.appendChild(count);
        infoGroup.appendChild(plusBtn);
        infoGroup.appendChild(deleteBtn);
        product.appendChild(productImageName);
        product.appendChild(infoGroup);

        cartList.appendChild(product);

        const numericPrice = parseFloat(item.price);
        total += numericPrice * item.count;
    });
    let totalPriceElem = document.querySelector('.totalPrice');
    if (!totalPriceElem) {
        totalPriceElem = document.createElement('div');
        totalPriceElem.classList.add('totalPrice');
        cartList.appendChild(totalPriceElem);
    }
    totalPriceElem.textContent = `Общая сумма: $${total.toFixed(2)}`;
}

function updateItemCount(id, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.count += change;
    if (item.count <= 0) {
        localStorage.setItem('cart', JSON.stringify(cart.filter(p => p.id !== id)));
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    showCart();
}

function removeItem(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = cart.filter(p => p.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    showCart();
}

// показ модального окна 
const openBtn = document.querySelector('.buy');
const modalElem = document.querySelector('.modal')
const closeBtn = document.querySelector('.btn-close')
modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: 300ms ease-in-out;
`;

function showModal() {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0){
        alert('Ваша корзина пуста!');
        return;
    }
    else {
        modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
}
}

function closeModal() {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
    modalElem.style.transition = '300ms ease-out';
}

openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);


function handleContinue() {
    saveOrder();
    closeModal();
}

// конец 


// сохранение заказа
function saveOrder() {
    const list = JSON.parse(localStorage.getItem('cart')) || [];
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: list
    }

    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    history.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(history));

    localStorage.removeItem('cart');
    alert("заказ оформлен!");
    location.reload();
}


window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
        showCart();
    }
});
document.addEventListener('DOMContentLoaded', showCart);

