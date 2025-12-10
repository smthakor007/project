import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("#fff"); 

  return (
    <div style={{ backgroundColor: color, height: "20vh", textalign: "center" }}>
      <h1>Change Background Color</h1>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorChanger;
