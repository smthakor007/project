import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, selectEdit } from "./Action";

export default function Display() {
  const { list } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Display</h1>

      {list.map((el, i) => (
        <li key={i}>
          {el}

          <button
            onClick={() => dispatch(selectEdit(i, el))}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            onClick={() => dispatch(deleteAction(i))}
            style={{ marginLeft: "5px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}
