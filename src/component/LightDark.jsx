import React from 'react'
import usestate from 'react'

function changeColor() { 
  document.body.classList.toggle('dark-mode');
}

export default function Lightdark() {
  return (
    <div>
      <button onClick={changeColor}>Toggle Dark Mode</button>
    </div>
  );
}

