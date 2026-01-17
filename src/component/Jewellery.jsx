import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Electronic.css";

export default function Jewellery() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <h1 className="title">Jewellery Store</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search jewellery..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

     
      <div className="products">
        {filteredProducts.length === 0 ? (
          <p className="no-data">No products found</p>
        ) : (
          filteredProducts.map((item) => (
            <div className="card" key={item.id}>
              <Link to={`/productDetail/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
              <p className="price">₹ {item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
