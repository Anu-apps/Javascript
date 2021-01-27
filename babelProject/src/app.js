import Product from './components/Product'

let product = new Product()

showProducts()

document.getElementById("productForm").addEventListener("submit", async function (e) {
    e.preventDefault()

    let name = document.getElementById("name")
    let description = document.getElementById("description")
    let image = document.getElementById("image")
    let price = document.getElementById("price")


    await product.addProduct({
        name: name.value,
        description: description.value,
        image: image.value,
        price: price.value
    })

    name.value = ""
    description.value = ""
    image.value = ""
    price.value = ""

    showProducts()

})


async function showProducts() {
    let results = document.getElementById("results")

    let products = await product.getAllProducts()

    let data = ''

    products && products.data.forEach(product => {

        data += `
    <div class="card col-3">
  <img class="card-img-top" src="${product.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn btn-primary">${product.price}</a>
  </div>
</div>
`

    });


    results.innerHTML = data
}