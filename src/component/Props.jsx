// import React, { useState } from 'react'
// import Child from './Child'
// export default function Props({ props }) {
//     const [state, setState] = useState({

//         name: "sunil",
//         email: "sm19@gmail.com"
//     })
//     return (
//         <div>
//             <h1>
//                 parent component
//             </h1>
//             <p>{state.name}</p>


//             <Child data={state} />


//         </div>
//     )
// }



import React, { useState } from "react";
import Child from "./Child";
import MyContext from "./CreateContext";

export default function Props() {
  const [state] = useState({
    name: "Sunil",
    email: "sunil@gmail.com",
  });

  return (
    <div>
      <h1>Parent comp</h1>
      <p>{state.name}</p>

      <MyContext.Provider value={state}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

