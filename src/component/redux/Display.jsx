import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const data = useSelector((state) => state);

  return (
    <div>
      <h2>Display Data</h2>
      <ul>
        {data.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
