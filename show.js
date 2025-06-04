'use strict'
const buttons = document.querySelectorAll('button[data-show]');
const productList = document.getElementById('productList');

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
                        <button class="decrement" onclick="changeCount(this, 'remove')">-</button>
                        <span class="count">0</span>
                        <button class="increment" onclick="changeCount(this, 'add')">+</button>
                        <br>
                        <br>
                        <button class="addToStorage" onclick="addToCart(this)">в корзину</button>
                    </div>
                </div>
            </div>
            `;
            div.querySelector('.item__image-picture').src = "img/" + product.image;
            productList.appendChild(div);
        })
    })
});

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
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navigarion__categorie')) {
      document.querySelectorAll('.dropdown-button').forEach(menu => menu.classList.remove('active'));
    }
  });

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
        cereals: products.pastaCereals.cereal
    };

    return map[category] || [];
}

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
    const imgSrc = item.querySelector('.item__image-picture').getAttribute('src');
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



