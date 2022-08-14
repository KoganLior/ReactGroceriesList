import "./App.css";
import Grocery from "./Grocery";
import "./grocery.css";
import OrderSummary from "./orderSummary";
import "./orderSummary.css"
import productsData from "./productsData.js";
import {useRef, useState} from "react"
function App() {

  //for future use 
  const[shoppingListItems,setShoppingListItems]=useState([])
  const shoppingList = useRef()
  ///

  const moveToShoppingList = event => {
    //take the the event.target name , price ,quantity
    //and creates a new <Grocery> in the shopping list

    // i couldn't get the data from the clicked button that's why i couldn't continue the code
    //and also didn't created all the necessary useState 
  };
  return (
    <div className="App">
      <div className="groceriesList">
        <h2 className="listTitle">Groceries List</h2>
        {productsData.map(product => <Grocery
        key={product.name}
        name={product.name}
        price={`${product.price}$`}
        quantity={product.quantity}
        onClick={moveToShoppingList}></Grocery>)}
      </div>
          
      <div className="shoppingList" ref={shoppingList}>
      <h2 className="listTitle">Shopping List List</h2>
      {productsData.map(product => <Grocery
        key={product.name}
        name={product.name}
        price={`${product.price}$`}
        quantity={product.quantity}
        onClick={moveToShoppingList}></Grocery>)}
      <OrderSummary price="7M $" quantity="7"></OrderSummary>
      </div>
      
    </div>
    
  );
}

export default App;
