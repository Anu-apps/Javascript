function Card(props) {

    let filterItem = props.cartItems.filter(item => item.id === props.id)

    return (
        <div class="card col-4">
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5>{props.name}</h5>
                <h5>{props.description}</h5>
                <h5>{props.price}</h5>
                {
                    filterItem.length > 0 ?


                        <div class="input-group mb-3">
                            <button class="btn btn-outline-secondary" type="button" onClick={(e) => { props.addToCart(e, props.id, 'decrement') }}>-</button>

                            <input disabled={true} type="text" class="form-control" value={filterItem[0].quantity}></input>
                            <button class="btn btn-outline-secondary" type="button" onClick={(e) => { props.addToCart(e, props.id) }}>+</button>
                        </div>


                        :


                        <a href="#" class="btn btn-primary" onClick={(e) => { props.addToCart(e, props.id) }}>Add to cart</a>


                }
            </div>
        </div>
    )
}

export default Card
