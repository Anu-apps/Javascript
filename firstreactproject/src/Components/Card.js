function Card(props) {
    return (
        <div class="card col-3">
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5>{props.name}</h5>
                <h5>{props.description}</h5>
                <h5>{props.price}</h5>

                
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default Card
