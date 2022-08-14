function OrderSummary(props){
    return(
        <div className="summaryBox">
            <p>Quantity of Items in list : {props.quantity}</p>
            <p>Total Price : {props.price}</p>
        </div>
    )
}
export default OrderSummary