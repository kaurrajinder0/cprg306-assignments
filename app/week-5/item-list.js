"use client";

import { useState } from "react";
import Item from './item';
import items from './items.json';

export default function ItemList () {
  const [sortBy, setSortBy] = useState("name");


  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button className="m-2 p-1 w-28 bg-orange-500 text-gray-50"
        onClick={() => handleSortChange("name")}
      >
         Name
      </button>
      <button className="m-2 p-1 w-28 bg-orange-500 text-gray-50"
        onClick={() => handleSortChange("category")}
      >
         Category
      </button>

      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};


