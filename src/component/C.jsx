import React, { useContext } from "react";
import MyContext from "./CreateContext";

export default function C() {
  const data = useContext(MyContext);

  return (
    <div>
      <h1>C comp</h1>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
}
