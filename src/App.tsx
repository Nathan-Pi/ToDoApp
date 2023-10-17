import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an Item.")
    }
    const item:number = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item])

    setNewItem("");

    console.log(items)
  }

  function deleteItem(id){

    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <input  type="text" 
              placeholder="Add An item"
              value={newItem}
              onChange={e => setNewItem(e.target.value)} 
              maxLength="100"
              />
      <button className="btn btn-info delete-button" onClick={addItem}>Add</button>

      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
