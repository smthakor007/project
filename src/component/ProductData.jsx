import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Products List</h1>

      {products.length === 0 && <p>Loading...</p>}

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.img} alt={p.desc} width="150" />
            <p><b>Category:</b> {p.category}</p>
            <p><b>Description:</b> {p.desc}</p>
            <p><b>Price:</b> ₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
