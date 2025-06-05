'use strict'
function showOrder() {
    const orderedItem = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    if (orderedItem.length === 0) {
        userContainer.textContent = 'Вы еще не совершали покупок';
        return;
    }

    orderedItem.forEach(order => {
        const orderElem = document.createElement('div');
        orderElem.classList.add('orderDiv');

        const dateElem = document.createElement('h3');
        dateElem.textContent = `Дата заказа: ${order.date}`;
        dateElem.classList.add('orderDate')
        orderElem.appendChild(dateElem);



        const listElem = document.createElement('ul');

        order.items.forEach(item => {
            const itemElem = document.createElement('li');
            itemElem.classList.add('orderDesc')
            itemElem.textContent = `${item.name} — Кол-во: ${item.count}, Цена за шт: $${item.price}`;
            const orderImg = document.createElement('img');
            orderImg.classList.add('orderImg');
            orderImg.src = item.imgSrc;

            listElem.appendChild(itemElem);
            listElem.appendChild(orderImg);
        });

        orderElem.appendChild(listElem);
        userContainer.appendChild(orderElem);
    });
}

document.addEventListener('DOMContentLoaded', showOrder);