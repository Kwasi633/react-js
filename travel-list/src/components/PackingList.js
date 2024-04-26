import React, { useState } from "react";
import Item from "./Item";

export const PackingList = ({ items, onDeleteItem, onClear }) => {
    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems;
  
    if(sortBy === 'input') sortedItems = items;
  
    if(sortBy === 'description'){
      sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    }
    
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => <Item item={item} 
          onDeleteItem={onDeleteItem} key={item.id}/>)}
        </ul>
  
        <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
  
        <button onClick={onClear}>Clear List</button>
  
        </div>
      </div>
      
    );
  }
  