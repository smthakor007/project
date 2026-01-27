import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductData() {
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  const [list, setList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setList(res.data);
    setAllData(res.data);
  };

  useEffect(() => {
    let result = [...allData];

    if (search) {
      result = result.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setList(result);
  }, [search, sort, allData]);

  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();

    if (edit) {
      await axios.put(
        `http://localhost:5000/products/${edit}`,
        {
          ...data,
          price: Number(data.price),
          stock: Number(data.stock)
        }
      );
      setEdit(null);
    } else {
      await axios.post("http://localhost:5000/products", {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock)
      });
    }

    setData({ name: "", price: "", category: "", stock: "" });
    fetchApi();
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchApi();
  };

  const edi = (item) => {
    setData({
      name: item.name,
      price: item.price,
      category: item.category,
      stock: item.stock
    });
    setEdit(item.id);
  };

  const cancel = () => {
    setData({ name: "", price: "", category: "", stock: "" });
    setEdit(null);
  };

  return (
    <div>
      <h2>Product Management</h2>

      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      <form onSubmit={submit}>
        <input name="name" placeholder="Name" value={data.name} onChange={handle} />
        <input name="price" type="number" placeholder="Price" value={data.price} onChange={handle} />
        <input name="category" placeholder="Category" value={data.category} onChange={handle} />
        <input name="stock" type="number" placeholder="Stock" value={data.stock} onChange={handle} />

        <button>{edit ? "Update" : "Add"}</button>
        {edit && <button type="button" onClick={cancel}>Cancel</button>}
      </form>

      <ul>
        {list.map((i) => (
          <li key={i.id}>
            {i.name} | ₹{i.price} | {i.category} | Stock: {i.stock}
            <button onClick={() => edi(i)}>Edit</button>
            <button onClick={() => del(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
