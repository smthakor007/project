// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProductData() {
//   const [data, setData] = useState({
//     name: "",
//     price: "",
//     category: "",
//     stock: ""
//   });

//   const [list, setList] = useState([]);
//   const [allData, setAllData] = useState([]);
//   const [edit, setEdit] = useState(null);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const fetchApi = async () => {
//     const res = await axios.get("http://localhost:5000/products");
//     setList(res.data);
//     setAllData(res.data);
//   };

//   useEffect(() => {
//     let result = [...allData];

//     if (search) {
//       result = result.filter((i) =>
//         i.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (sort === "asc") {
//       result.sort((a, b) => a.price - b.price);
//     } else if (sort === "desc") {
//       result.sort((a, b) => b.price - a.price);
//     }

//     setList(result);
//   }, [search, sort, allData]);

//   function handle(e) {
//     setData({ ...data, [e.target.name]: e.target.value });
//   }

//   const submit = async (e) => {
//     e.preventDefault();

//     if (edit) {
//       await axios.put(
//         `http://localhost:5000/products/${edit}`,
//         {
//           ...data,
//           price: Number(data.price),
//           stock: Number(data.stock)
//         }
//       );
//       setEdit(null);
//     } else {
//       await axios.post("http://localhost:5000/products", {
//         ...data,
//         price: Number(data.price),
//         stock: Number(data.stock)
//       });
//     }

//     setData({ name: "", price: "", category: "", stock: "" });
//     fetchApi();
//   };

//   const del = async (id) => {
//     await axios.delete(`http://localhost:5000/products/${id}`);
//     fetchApi();
//   };

//   const edi = (item) => {
//     setData({
//       name: item.name,
//       price: item.price,
//       category: item.category,
//       stock: item.stock
//     });
//     setEdit(item.id);
//   };

//   const cancel = () => {
//     setData({ name: "", price: "", category: "", stock: "" });
//     setEdit(null);
//   };

//   return (
//     <div>
//       <h2>Product Management</h2>

//       <input
//         placeholder="Search by name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <select onChange={(e) => setSort(e.target.value)}>
//         <option value="">Sort by Price</option>
//         <option value="asc">Low → High</option>
//         <option value="desc">High → Low</option>
//       </select>

//       <form onSubmit={submit}>
//         <input name="name" placeholder="Name" value={data.name} onChange={handle} />
//         <input name="price" type="number" placeholder="Price" value={data.price} onChange={handle} />
//         <input name="category" placeholder="Category" value={data.category} onChange={handle} />
//         <input name="stock" type="number" placeholder="Stock" value={data.stock} onChange={handle} />

//         <button>{edit ? "Update" : "Add"}</button>
//         {edit && <button type="button" onClick={cancel}>Cancel</button>}
//       </form>

//       <ul>
//         {list.map((i) => (
//           <li key={i.id}>
//             {i.name} | ₹{i.price} | {i.category} | Stock: {i.stock}
//             <button onClick={() => edi(i)}>Edit</button>
//             <button onClick={() => del(i.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/products";

export default function ProductStore() {
  const [form, setForm] = useState({
    productName: "",
    price: "",
    category: "",
    quantity: ""
  });

  const [products, setProducts] = useState([]);
  const [backup, setBackup] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await axios.get(API);
    setProducts(res.data);
    setBackup(res.data);
  };

  useEffect(() => {
    let temp = [...backup];

    if (search) {
      temp = temp.filter((p) =>
        p.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    setProducts(temp);
  }, [search, sort, backup]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveProduct = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity)
    };

    if (editId) {
      await axios.put(`${API}/${editId}`, payload);
      setEditId(null);
    } else {
      await axios.post(API, payload);
    }

    setForm({ productName: "", price: "", category: "", quantity: "" });
    loadProducts();
  };

  const editProduct = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    loadProducts();
  };

  return (
    <div className="box">
      <h2>Product Store Manager</h2>

      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <form onSubmit={saveProduct}>
        <input
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="quantity"
          type="number"
          placeholder="Available Qty"
          value={form.quantity}
          onChange={handleChange}
        />

        <button>{editId ? "Update Product" : "Add Product"}</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.productName} | ₹{p.price} | {p.category} | Qty: {p.quantity}
            <button onClick={() => editProduct(p)}>Edit</button>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}