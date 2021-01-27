import axios from 'axios'

class Product{

    constructor(){
        this.products = []

        this.getAllProducts()
        .then((res)=>{
            this.products = res.data
        })
    }


    addProduct(product){

        // api call to add product
        return axios.post("https://5fffdd12cb21e10017af8153.mockapi.io/products/", product)

    }

    getAllProducts(){

        return axios.get("https://5fffdd12cb21e10017af8153.mockapi.io/products/")
    
    }

}

export default Product