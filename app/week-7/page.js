"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-idea.js';

const initialItemsData = [
  { id: 1, name: 'Item 1', category: 'Category 1', quantity: 1 },
  { id: 2, name: 'Item 2', category: 'Category 2', quantity: 2 },
];

export default function Page() {
  const [items, setItems] = useState(initialItemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <div className="text-gray-50 bg-slate-950 p-2 ">
      <h2 className="text-3xl font-bold mb-4">Shopping List</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold">Add New Item</h3>
        <NewItem onAddItem={handleAddItem} />
      </div>

      <div>
        <h3 className="text-xl font-bold"></h3>
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="w-1/2 p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
