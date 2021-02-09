function Titlebar(props){

    return(
        <div className="container-fluid title-bar">
            <div className="row">
                <div className="col">
                    <h2>
                        {props.title || "Title"}
                    </h2>
                </div>

            </div>
        </div>
    )
}


export default Titlebar
