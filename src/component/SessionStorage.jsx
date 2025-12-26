import React, { useEffect, useState } from 'react';

export default function SessionStorage() {
  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const [data, setData] = useState(() => {
    const saveData = JSON.parse(sessionStorage.getItem("data"));
    return saveData || [];
  });

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function SubmitForm(e) {
    e.preventDefault();
    setData([...data, state]);
    setState({ name: "", email: "" }); 
  }

  function deleteItem(index) {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  }

  

  return (
    <div>
      <h1>Session Storage</h1>

      <form onSubmit={SubmitForm}>
        <label>Name:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            setState({ ...state, name: e.target.value })
          }
        />
        <br />

        <label>Email:</label>
        <input
          type="text"
          value={state.email}
          onChange={(e) =>
            setState({ ...state, email: e.target.value })
          }
        />
        <br/>

        <input type="submit" />
      </form>

      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {el.name} - {el.email}
            <button onClick={() => deleteItem(i)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
