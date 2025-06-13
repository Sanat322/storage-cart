'use strict'
const slideGroup = document.querySelectorAll('.categorySlider');

slideGroup.forEach(group => {
    const slidePart = group.dataset.show;
    const items = findProductByCategory(slidePart);

    items.forEach(produce =>{
        const div = document.createElement('div');
        div.className = 'produce';
        div.dataset.name = produce.name;
        div.dataset.id = produce.id;
        div.dataset.price = produce.price;
        div.dataset.produce = slidePart;
        div.dataset.volume = produce.volume;

        div.innerHTML = `
        
        <div class="item__slider"><img class="item__image-picture-slide">
                </div>
                <div class="item__add-slide">
                <div class="item__add-slide-info">
                    <h2 class="item__add-description-slide">${produce.name}</h2>
                    <p class="item__add-capacity-slide">${produce.volume}</p>
                    <p class="item__add-price-slide">${produce.price}</p>
                    </div>
                    <div class="item__buttons-slide">
                        <button class="decrement-slide" onclick="changeCount(this, 'remove'), changeCountCartIcon('remove')">-</button>
                        <span class="count-slide">0</span>
                        <button class="increment-slide" onclick="changeCount(this, 'add'), changeCountCartIcon('add')">+</button>
                        <button class="addSliderProduce" onclick="addSelectedToCart(this)">добавить</button>
                        <br>
                        <br>
                        
                        </div>
                </div>
            </div>
            `
            div.querySelector('.item__image-picture-slide').src = "img/" + produce.image;
            group.appendChild(div);
    })
})
