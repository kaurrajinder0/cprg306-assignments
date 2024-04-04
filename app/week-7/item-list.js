"use client";
import Item from "./item";
import { useState, useEffect } from "react";

export default function ItemList({
  items,
  onRemoveItem,
  setIngredient,
  setItems,
}) {
  const [sortby, setSortBy] = useState("name");

  let sortedItems;

  if (sortby === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    console.log("sorted by name");
  } else if (sortby === "category") {
    sortedItems = [...items].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    console.log("sorted by category");
  }

  const handleRemove = (id) => {
    onRemoveItem(id);
  };

  const handleItemClick = (itemName) => {
    const formattedIngredient = itemName.replace(/[^a-zA-Z0-9 ]/g, "");

    const RemoveLastCharsIngredient = formattedIngredient.split(" ");

    const finalIngredient = RemoveLastCharsIngredient.slice(0, 2).join(" ");

    setIngredient(finalIngredient);
  };

  return (
    <main className="flex-col items-center justify-center align-middle content-center">
      <div className="flex justify-center">
        <span>Sort by:</span>
      </div>
      <div className="flex justify-center align-middle content-center gap-2 p-2 m-2 ">
        <button
          id="name"
          className="border-2 border-black w-24 bg-blue-400 rounded-3xl p-2"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          id="category"
          className="border-2 border-black w-24 bg-purple-400  rounded-3xl p-2 "
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      {sortedItems.map((item) => (
        <div className="flex flex-col border-b">
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          ></Item>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-red-300 border-2 text-s rounded-lg  border-black w-10 mr-10 mb-2 font-bold"
              type="button"
              onClick={() => handleRemove(item.id)}
            >
              -
            </button>
            <button
              className=" border-2 text-s rounded-lg  border-black w-[7rem] px-1 mb-2 font-bold"
              type="button"
              onClick={() => handleItemClick(item.name)}
            >
              Recipe Idea
            </button>
          </div>
        </div>
      ))}
      ;
    </main>
  );
}