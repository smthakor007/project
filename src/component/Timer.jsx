// import React, { useEffect, useState } from 'react'
// export default function Timer() {
//   const [timer, setTimer] = useState(0)
//   const [start, setStart] = useState(false)

//   useEffect(() => {
//     if (!start) return

//     const sunil = setTimeout(() => { 
//       setTimer(timer + 1)
//     }, 1000)

//     return () => clearTimeout(sunil)
//   }, [timer, start])

//   return (
//     <div>
//       <h1>Timer  {timer} </h1>

//       <button onClick={() => setStart(true)}>Start</button>
//       <button onClick={() => setStart(false)}>Stop</button>
//     </div>
//   )
// }
   



import React, { useEffect, useRef,useState } from 'react';

export default function Timer() {
  const [state, setState] = useState(0);
  const id = useRef(0);

  function Start() {
    id.current = setInterval(() => {
      setState((prevState) => prevState + 1);
      console.log(id.current);
    }, 1000);
  } 

  function stop() {
    clearInterval(id.current);
  }

  return (
    <div>
      <h1>Timer is {state}</h1>
      <button onClick={Start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
