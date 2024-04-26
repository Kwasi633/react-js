import { useState } from "react";

import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);


  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
   }

   const handleDeleteItem = (id) => {
    setItems((items) => items.filter(item => item.id !== id))
   }

   const handleClear = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    
    if(confirmed) setItems([]);
   }

 return  <div className="app">
  <Logo /> 

  <Form 
    onAddItems={handleAddItems}
  />

  <PackingList 
    items={items}
    onDeleteItem={handleDeleteItem}
    onClear={handleClear}
  />

  <Stats 
    items={items}
  />
  </div>
  
}

export default App;

// import { useState } from "react";

// const App = () => {
//   const [items, setItems] = useState([]);


//   const handleAddItems = (item) => {
//     setItems((items) => [...items, item])
//    }

//    const handleDeleteItem = (id) => {
//     setItems((items) => items.filter(item => item.id !== id))
//    }

//    const handleClear = () => {
//     const confirmed = window.confirm('Are you sure you want to delete all items?')
    
//     if(confirmed) setItems([]);
//    }

//  return  <div className="app">
//   <Logo /> 

//   <Form 
//     onAddItems={handleAddItems}
//   />

//   <PackingList 
//     items={items}
//     onDeleteItem={handleDeleteItem}
//     onClear={handleClear}
//   />

//   <Stats 
//     items={items}
//   />
//   </div>
  
// }

// //Logo component
// const Logo = () => {
//   return <h1>🌴Far away 💼</h1>
// }

// //form component
// const Form = ({ onAddItems }) => {
//  const [description, setDescription] = useState("");
//  const [quantity, setQuantity] = useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!description) return;

//     const newItem = {
//       description,
//       quantity,
//       package: false,
//       id: Date.now()
//     }
//     console.log(newItem);
    
//     onAddItems(newItem)

//     setDescription("");
//     setQuantity(1)
//   }

//   return(
//   <form className="add-form" onSubmit={handleSubmit}>
//   <h3>What do you need for your trip?</h3>

//   <select
//   value={quantity}
//   onChange={(e) => setQuantity(Number(e.target.value))}
//   >
//     {Array.from({ length: 20}, (_, i) => i + 1).map
//     ((num) => (
//       <option value={num} key={num}>
//         {num}
//       </option>
//     ))
//     }
//   </select>

//   <input type="text" placeholder="Item..." 
//   value={description}
//   onChange={(e) => setDescription(e.target.value)}
//   />
//   <button>Add</button>
//   </form>
//   ) 
// }


// const PackingList = ({ items, onDeleteItem, onClear }) => {
//   const [sortBy, setSortBy] = useState('input');

//   let sortedItems;

//   if(sortBy === 'input') sortedItems = items;

//   if(sortBy === 'description'){
//     sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
//   }
  

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => <Item item={item} 
//         onDeleteItem={onDeleteItem} key={item.id}/>)}
//       </ul>

//       <div className="actions">
//       <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//         <option value='input'>Sort by input</option>
//         <option value='description'>Sort by description</option>
//         <option value='packed'>Sort by packed status</option>
//       </select>

//       <button onClick={onClear}>Clear List</button>

//       </div>
//     </div>
    
//   );
// }

// const Item = ({ item, onDeleteItem }) => {
//   return <li>
//   <input type="checkbox" 
//   value={item.packed} 
//   />
//     <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.description}</span>
//     <button
//     onClick={() => onDeleteItem(item.id)}>❌</button>
//   </li>
// }

// const Stats = ({ items }) => {
//   if(!items.length) return <p className="stats">
// <em>Start adding some item to your packing list 🚀</em></p>

//   const numItems = items.length

//   return <footer className="stats">
  
//   <em>💼 You have {numItems} items on your list
//   </em>
//   </footer>
// }

// export default App;