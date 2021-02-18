import Product from './components/Product'

let product = new Product()


const product1 = new Product()

product1.addProduct({
    id: 1,
    qty: 20,
    name: "Tshirts"
})

console.log(product1.getProduct())