import React, { useState, useEffect } from 'react';

export default function Todoo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storeTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteBtn = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editBtn = (index) => {
    const newValue = prompt("Enter new value:", todos[index]);
    if (newValue && newValue.trim() !== "") {
      const updated = [...todos];
      updated[index] = newValue;
      setTodos(updated);
    }
  };

  return (
    <div>
      <h1>Todo</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter todo"
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />

      <button onClick={addTodo}>Submit</button>

      <ul>
        {todos.map((el, index) => (
          <li key={index}>
            {el}
            <button onClick={() => editBtn(index)}>Edit</button>
            <button onClick={() => deleteBtn(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
