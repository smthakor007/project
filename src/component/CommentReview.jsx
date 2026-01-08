import React, { useState, useRef } from "react";

///////////  CONTROLL  //////////

function Controll() {
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
      <h2> Controll </h2>

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

//////////  UNCONTROLL //////////

function Uncontroll() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const commentRef = useRef(null);
  const ratingRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const rating = ratingRef.current.querySelector(
      'input[name="rating"]:checked'
    )?.value;

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      review: rating,
      comment: commentRef.current.value,
    };

    if (!data.name || !data.email || !data.review || !data.comment) {
      alert("All fields are required");
      return;
    }
    console.log(" Data:", data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    commentRef.current.value = "";
    ratingRef.current
      .querySelectorAll('input[name="rating"]')
      .forEach(r => (r.checked = false));
  }

  return (
    <div>
      <h2>Uncontroll</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} /><br /><br />

        <input type="email" placeholder="Email" ref={emailRef} /><br /><br />

        <h4>Rating</h4>
        <div ref={ratingRef}>
  <label>
    <input type="radio" name="rating" value="1" /> 1
  </label>
  <label>
    <input type="radio" name="rating" value="2" /> 2
  </label>
  <label>
    <input type="radio" name="rating" value="3" /> 3
  </label>
  <label>
    <input type="radio" name="rating" value="4" /> 4
  </label>
  <label>
    <input type="radio" name="rating" value="5" /> 5
  </label>
</div>

        <br />

        <textarea placeholder="Write comment" ref={commentRef}></textarea>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default function CommentReview() {
  return (
    <div style={{ justifyContent: "center" }}>
      <Controll />
      <Uncontroll />
    </div>
  );
}
