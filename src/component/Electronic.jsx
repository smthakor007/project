import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Electronic() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Electronics</h1>

      <input
        type="text"placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <hr />

      {products
        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (sort === "low") return a.price - b.price;
          if (sort === "high") return b.price - a.price;
          return 0;
        })
        .map((item) => (
          <div key={item.id}>
            <Link to={`/productDetail/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>

            <img src={item.image} alt={item.title} width="120" />
            <p>$ {item.price}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}
