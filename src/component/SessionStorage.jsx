import React, { useEffect, useState } from 'react';

export default function SessionStorage() {
  const [state, setState] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState(() => {
    return JSON.parse(sessionStorage.getItem("data")) || [];
  });

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function SubmitForm(e) {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = state;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, state]);
    }

    setState({ name: "", email: "" });
  }

  function deleteItem(index) {
    setData(data.filter((_, i) => i !== index));
  }

  function editItem(index) {
    setState(data[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h1>Session Storage</h1>

      <form onSubmit={SubmitForm}>
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />

        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {el.name} - {el.email}
            <button onClick={() => deleteItem(i)}>Delete</button>
            <button onClick={() => editItem(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
