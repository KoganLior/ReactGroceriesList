function Grocery(props){

    return(
        <div className="grocery">
        <img src="https://via.placeholder.com/150" alt="no image" className="groceryThumbnail"></img>
        <div className="groceryInfo">
          <p>Name : {props.name}</p>
          <p>Price :{props.price}</p>
          <p>Quantity :{props.quantity}</p>
        </div>
      </div>
    )
}
export default Grocery