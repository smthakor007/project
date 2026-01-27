import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { myAction, updateAction, selectEdit } from "./Action";

export default function Input() {
  const dispatch = useDispatch();
  const { editIndex, editValue } = useSelector((store) => store);

  function handleSubmit() {
    if (editIndex === null) {
      dispatch(myAction(editValue));
    } else {
      dispatch(updateAction(editIndex, editValue));
    }
  }

  return (
    <div>
      <input
        type="text"
        value={editValue}
        onChange={(e) =>
          dispatch(selectEdit(editIndex, e.target.value))
        }
        placeholder="Enter text"
      />

      <button onClick={handleSubmit}>
        {editIndex === null ? "Submit" : "Update"}
      </button>
    </div>
  );
}
