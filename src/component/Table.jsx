// // import React from 'react'

// // export default function Table() {
// //   return (
// //     <div>
// //         <h1>Table</h1>
// //         <table border="1">

// //             <tr>
// //                 <th>Name</th>
// //             </tr>
// //         </table>
// //     </div>
// //   )
// // }



// import React from "react";

// export default function Table() {
//   return (
//     <div>
//       <table border="1">
      
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>City</th>
//           </tr>
        
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>sunil</td>
//             <td>Ahmedabad</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>gopal</td>
//             <td>Surat</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React from "react";

export default function Table() {
  return (
    <div>
      <h2>Table Component</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Sunil</td>
            <td>Ahmedabad</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Gopal</td>
            <td>Surat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

