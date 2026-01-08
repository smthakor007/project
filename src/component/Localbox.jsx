import React, { useState, useEffect } from "react";

 ///// Local Storage /////

function LocalStorage() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("localTodos"));
    if (data) setTodos(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = task;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  }

  function handleEdit(index) {
    setTask(todos[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>Local Storage </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

 ///// session Storage /////

function SessionStorage() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("sessionTodos"));
    if (data) setTodos(data);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("sessionTodos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = task;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  }

  function handleEdit(index) {
    setTask(todos[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>Session Storage</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function Localbox() {
  return (
    <div >
      <LocalStorage />
      <SessionStorage />
    </div>
  );
}
