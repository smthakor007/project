import React, { useEffect, useState } from "react";

function AutoSave() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Saved:", text);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div>
      <h3>Type Something:</h3>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default AutoSave;
