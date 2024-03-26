"use client";
import React from "react";
import { useState } from "react";
import Item from "./item";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQauntity] = useState(0);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();


    const item = { name, quantity, category };

    onAddItem(item);

    setName("");
    setQauntity(0);
    setCategory("produce");
  }

  return (
    <div>
      <form
        className=" flex flex-col justify-center align-middle p-8 max-w-xs mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="text-black" htmlFor="name">
          Item
        </label>

        <input
          className="mb-2"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          className="mb-2"
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQauntity(e.target.value)}
        />

        <label htmlFor="category">Category</label>
        <input
          className="mb-2"
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button className="border-2 border-black bg-green-300 rounded-lg" type="submit">
          +
        </button>
      </form>
    </div>
  );
}