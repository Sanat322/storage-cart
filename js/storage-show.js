'use strict'
let cartWindow = null;

const buttons = document.querySelectorAll('button[data-show]');
const productList = document.getElementById('productList');
const openStorageModal = document.getElementById('modalCategory');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.show;
        const items = findProductByCategory(category);
        productList.innerHTML = '';

        items.forEach(product => {
            const div = document.createElement('div');
            div.className = 'item';
            div.dataset.name = product.name;
            div.dataset.id = product.id;
            div.dataset.product = category;
            div.dataset.price = product.price;
            div.dataset.volume = product.volume;

            div.innerHTML = `
                <div class="item__image"><img class="item__image-picture">
                </div>
                <div class="item__add">
                    <h2 class="item__add-description">${product.name}</h2>
                    <p class="item__add-capacity">${product.volume}</p>
                    <p class="item__add-price">${product.price}</p>
                    <div class="item__buttons">
                        <button class="decrement" onclick="changeCount(this, 'remove'), changeCountCartIcon('remove')">-</button>
                        <span class="count">0</span>
                        <button class="increment" onclick="changeCount(this, 'add'), changeCountCartIcon('add
                        ')">+</button>
                        <br>
                        <br>

                        </div>
                </div>
            </div>
            `;
            div.querySelector('.item__image-picture').src = "img/" + product.image;
            productList.appendChild(div);
            document.querySelector('.storage').style.display = 'block';
        })
        openStorageModal.style.opacity = 1;
        openStorageModal.style.visibility = 'visible';

    })
});

function closeCategoryModal() {
    openStorageModal.style.opacity = 0;
    setTimeout(() => {
        openStorageModal.style.visibility = 'hidden';
    }, 300); // 300мс = как в CSS transition
}

function toggleMenu(button) {
    // Закрываем все открытые меню
    document.querySelectorAll('.dropdown-button').forEach(menu => {
        if (menu !== button.nextElementSibling) {
            menu.classList.remove('active');
        }
    });

    // Открываем/закрываем текущее меню
    const dropdown = button.nextElementSibling;
    dropdown.classList.toggle('active');
}

// Закрытие при клике вне меню
document.addEventListener('click', function (e) {
    if (!e.target.closest('.navigation__categorie')) {
        document.querySelectorAll('.dropdown-button').forEach(menu => menu.classList.remove('active'));
    }
});


// категорий продуктов
function findProductByCategory(category) {
    const map = {
        milk: products.milkProducts.milk,
        cheese: products.milkProducts.cheese,
        egg: products.milkProducts.eggs,
        water: products.softDrinks.water,
        juice: products.softDrinks.juice,
        soda: products.softDrinks.soda,
        catTreats: products.pets.catFood,
        dogTreats: products.pets.dogFood,
        pastas: products.pastaCereals.pasta,
        cereals: products.pastaCereals.cereal,
        beef: products.meatAndFish.beefMeat,
        chicken: products.meatAndFish.chickenMeat,
        fish: products.meatAndFish.fishAndSeafood,
        bread: products.breadAndCakes.ordinaryBread,
        cakes: products.breadAndCakes.breadCakes,
        pita: products.breadAndCakes.pitaBread
    };

    return map[category] || [];
}

// колличество продуктов 

function changeCount(button, action) {
    const item = button.closest('.item, .produce');
    const counter = item.querySelector('.count, .count-slide');
    let count = parseInt(counter.textContent);

    if (action === 'add') count++;
    else if (action === 'remove' && count > 0) count--;

    counter.textContent = count;
}

function changeCountCartIcon(action) {
    const counterAll = document.querySelector('.count-all');
    if (!counterAll) return;
    let count = parseInt(counterAll.textContent);
    if (action === 'add') count++;
    else if (action === 'remove' && count > 0) count--;
    counterAll.textContent = count;
}




// модальное окно - профиль
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
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

function closeModal() {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
    modalElem.style.transition = '300ms ease-out';
}

openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);

// модальное окно - профиль конец


function showPopupMessage(text) {
    const popup = document.getElementById('popup-message');
    popup.textContent = text;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 1500);
}


// добавление в корзину

function addSelectedToCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const items = document.querySelectorAll('.item, .produce');
    items.forEach(item => {
        const countElem = item.querySelector('.count, .count-slide');
        const count = parseInt(countElem?.textContent);
        if (!count || count <= 0) return;

        const id = item.dataset.id;
        const price = item.dataset.price;
        const volume = parseFloat(item.dataset.volume);
        const name = item.querySelector('.item__add-description, .item__add-description-slide')?.textContent || 'Без названия';
        const imgSrc = item.querySelector('.item__image-picture, .item__image-picture-slide')?.getAttribute('src') || '';

        const existingItem = cart.find(product => product.id === id);

        if (existingItem) {
            existingItem.count += count;
        } else {
            cart.push({ id, name, price, volume, count, imgSrc });
        }
        countElem.textContent = '0';
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    if (!cartWindow || cartWindow.closed) {
        cartWindow = window.open('cart.html', '_blank');
    } else {
        cartWindow.focus();
    }
    showPopupMessage('Добавлено в корзину');
}


