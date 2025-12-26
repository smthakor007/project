import React, { useState, useRef } from "react";

// *****Controlled*****

function ControlledTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;

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

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setTask(todos[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h2> Controlled </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ***** Uncontrolled*****


function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const commentRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      comment: commentRef.current.value,
    };

    if (!data.name || !data.email || !data.comment) {
      alert("All fields are required");
      return;
    }

    console.log("Review Data:", data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    commentRef.current.value = "";
  }

  return (
    <div>
      <h2> Uncontrolled</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} /><br /><br />
        <input type="email" placeholder="Email" ref={emailRef} /><br /><br />
        <textarea placeholder="Write comment..." ref={commentRef}></textarea><br /><br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}


export default function CommentReview() {
  return (
    <div style={{ justifyContent: "center" }}>
      <ControlledTodo />
      <UncontrolledForm />
    </div>
  );
}
