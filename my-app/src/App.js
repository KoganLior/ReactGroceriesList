import "./App.css";
import Grocery from "./Grocery";
import "./grocery.css"
function App() {
  return (
    <div className="App">
      <Grocery
      name="grocery 1"
      price="1,000,000$"
      quantity="1"
      ></Grocery>
    </div>
  );
}

export default App;
