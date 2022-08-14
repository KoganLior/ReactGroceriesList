function Grocery(props){

    return(
        <button className="grocery" onClick={props.onClick} >
        <img src="https://via.placeholder.com/150" alt="product" className="groceryThumbnail"></img>
        <div className="groceryInfo">
          <p>Name : {props.name}</p>
          <p>Price :{props.price}</p>
          <p>Quantity :{props.quantity}</p>
        </div>
      </button>
    )
}
export default Grocery