import React, { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Toggle Text</h1>

      {show ? <p>Hello</p> : null}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
export default ToggleText;
 