"use client";

import { useState } from "react";

const Test = () => {
  const [filter, setFilter] = useState<
    "all" | "clothing" | "food" | "electronics"
  >("all");

  const initialProducts = [
    { id: 1, name: "T-Shirt", category: "Clothing", price: 20 },
    { id: 2, name: "Headphones", category: "Electronics", price: 100 },
    { id: 3, name: "Apple", category: "Food", price: 2 },
    { id: 4, name: "Jeans", category: "Clothing", price: 40 },
    { id: 5, name: "TV", category: "Electronics", price: 500 },
  ];

  const filteredProducts = initialProducts.filter((product) => {
    if (filter === "clothing") return product.category === "Clothing";
    if (filter === "food") return product.category === "Food";
    if (filter === "electronics") return product.category === "Electronics";
    return true;
  });

  return (
    <div>
      <div className="flex flex-row gap-5">
        <div
          className={`cursor-pointer bg-gray-500 ${
            filter === "all" ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </div>
        <div className={`cursor-pointer bg-gray-500 ${
            filter === "clothing" ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setFilter("clothing")}>Clothing</div>
        <div className={`cursor-pointer bg-gray-500 ${
            filter === "electronics" ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setFilter("electronics")}>Electronics</div>
        <div className={`cursor-pointer bg-gray-500 ${
            filter === "food" ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setFilter("food")}>Food</div>
      </div>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            <div className="flex flex-row gap-5">
              <p>Name: {p.name}</p>
              <p>Category: {p.category}</p>
              <p>Price ${p.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
