// fetch("https://fakestoreapi.com/products/")
// .then(response => response.json())
// .then(products => {
//     products.forEach((product) => {
//         const card = document.createElement('div');
//         card.classList.add('product');

//         const title = document.createElement('h2')
//         title.textContent = product.title;

//         const price = document.createElement('strong')
//         price.textContent = product.price

//         card.appendChild(title)
//         card.appendChild(price)

//         productList.appendChild(card)
//     })
// })

const productList = document.querySelector('.products-list')

fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach((user) => {
        const card = document.createElement('div')
        card.classList.add('user')

        const ism = document.createElement('h1')
        ism.textContent = user.username

        const narx = document.createElement('strong')
        narx.textContent = narx.email

        card.appendChild(ism)
        card.appendChild(narx)

        productList.appendChild(card)
    })
  });


  