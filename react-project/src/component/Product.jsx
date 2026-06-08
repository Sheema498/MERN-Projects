function Product(props){
    return(
        <>
        <h4>{props.name}</h4>
        <p>price: {props.price}</p>
        <p>Brand: {props.brand}</p>
        </>
    );
}

export default Product;