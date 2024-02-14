const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const item = document.createElement('li');
        item.textContent = `${product.nazev} - Cena: ${product.cenaZaKus} Kč, Počet: ${product.pocetNaSklade}`;
        productList.appendChild(item);
    });
}

function findExpensiveProduct() {
    const expensiveProduct = produkty.reduce((prev, current) => (prev.cenaZaKus > current.cenaZaKus) ? prev : current);
    displayProducts([expensiveProduct]);
}

function filterByQuantity() {
    const threshold = document.getElementById('quantity-filter').value;
    const filteredProducts = produkty.filter(product => product.pocetNaSklade < threshold);
    displayProducts(filteredProducts);
}

function calculateTotalValue() {
    const totalValue = produkty.reduce((total, product) => total + (product.cenaZaKus * product.pocetNaSklade), 0);
    document.getElementById('total-value').textContent = totalValue;
}

function updateProductQuantity() {
    const name = document.getElementById('update-name').value;
    const quantity = parseInt(document.getElementById('update-quantity').value, 10);
    const product = produkty.find(product => product.nazev === name);
    if (product) {
        product.pocetNaSklade = quantity;
        displayProducts(produkty);
        calculateTotalValue();
    } else {
        alert('Produkt nebyl nalezen.');
    }
}

document.getElementById('show-expensive').addEventListener('click', findExpensiveProduct);
document.getElementById('filter').addEventListener('click', filterByQuantity);
document.getElementById('update').addEventListener('click', updateProductQuantity);

// Inicializace
displayProducts(produkty);
calculateTotalValue();
