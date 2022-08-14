import "./App.css";
import Grocery from "./Grocery";
import "./grocery.css";
import OrderSummary from "./orderSummary";
import "./orderSummary.css"
function App() {
  return (
    <div className="App">
      <div className="groceriesList">
        <h2 className="listTitle">Groceries List</h2>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
        <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      </div>

      <div className="shoppingList">
      <h2 className="listTitle">Shopping List List</h2>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <Grocery name="grocery 1" price="1,000,000$" quantity="1"></Grocery>
      <OrderSummary price="7M $" quantity="7"></OrderSummary>
      </div>
      
    </div>
    
  );
}

export default App;
