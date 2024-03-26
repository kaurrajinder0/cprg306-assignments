"use client";
import { useState } from "react";
import NewItem from "../week-7/new-item";
import ItemList from "./item-list";
import itemsdata from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsdata);

  const [ingredient, setIngredient] = useState("");

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    console.log("Removing item with id:", id);

    const newItemsList = [...items].filter((listItem) => listItem.id !== id);
    setItems(newItemsList);
  };

  return (
    <main className=" ">
      <div className="flex justify-center">
        <h1 className="text-black mr-2 font-mono text-4xl m-2 p-2 border-2 border-black rounded-full shadow-md">
          SHOPPING LIST
        </h1>
      </div>

      <NewItem onAddItem={addItem} />
      <MealIdeas ingredient={ingredient} />
      <ItemList
        setIngredient={setIngredient}
        items={items}
        onRemoveItem={removeItem}
      />
    </main>
  );
}