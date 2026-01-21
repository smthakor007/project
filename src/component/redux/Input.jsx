import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "./Action";


export default function Input() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleSubmit() {
    if (text.trim() !== "") {
      dispatch(addAction(text));
      setText("");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
