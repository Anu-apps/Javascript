import ProductInventory from './components/ProductInventory'

import users from './json/users.json'

console.log(users)

let product = new ProductInventory()


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

    products && products.data.forEach(item => {

        data += `
    <div id="card_${item.id}" class="card col-3">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">$${item.price}</a>
    <hr>
    <button data-id="${item.id}" type="button" class="delete-product btn btn-primary">Delete</button>
  </div>
</div>
`   

    });

    
    results.innerHTML = data

    let allBtns = results.getElementsByClassName('delete-product')

    for(let btn of allBtns){
        btn.addEventListener('click', function(){
           let id= btn.getAttribute('data-id')
            product.deleteProduct(id)
            document.getElementById("card_"+id).remove()
        })
    }


}
