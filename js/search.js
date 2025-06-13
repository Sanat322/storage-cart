'use strict'
const search = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');

input.addVentVistener('input', () =>{
    const query = input.value.trim().toLowerCase();
    const filtered = products.filtered(product =>
        product.name.toLowerCase.includes(query)
    );
    searchResult.innerHTML = '';

    filtered.forEach(product  =>{
        const div = document.createElement('div');
        div.textContent = `${product.name} + ${product.price}`;
        searchResult.appendChild(div);
    }
        
    );
});
