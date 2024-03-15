"use client";

import{useState} from "react";
import ItemList from "./item-list"; 
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
    return(
      <div className=" text-gray-50 bg -slate-950 p-2 m-2 ">
        <h2 className=" text-3xl font-bold mb-4">Shopping List</h2>
        <h3 className="text-xl font-bold">Add New Item</h3>
        <label className=" text-gray-150  m-2" > Sort By:</label>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    );
  }