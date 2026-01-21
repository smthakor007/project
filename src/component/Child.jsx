// import React from 'react'

// export default function Child(data) {
//     console.log(data)
//     return (

        
//         <div>
//             <h1>Child Component</h1>
//             <p>{data.email}</p>

            

//         </div>
//     )
// }


import React from "react";
import C from "./C";

export default function Child() {
  return (
    <div>
      <h2>Child comp</h2>
      <C />
    </div>
  );
}



