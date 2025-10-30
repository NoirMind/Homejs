
const productList = document.querySelector('.products-list')

fetch("https://fakestoreapi.com/products/")
.then(response => response.json())
.then(products => {
    products.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('product');

        const title = document.createElement('h2')
        title.textContent = product.title;

        const price = document.createElement('strong')
        price.textContent = product.price

        card.appendChild(title)
        card.appendChild(price)

        productList.appendChild(card)
    })
})