// import React, { useEffect, useState } from "react";

// export default function Card() {
//   const [state, setState] = useState(
//     "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000"
//   );

//   useEffect(() => {
//     console.log("Component Mounted");

//     return () => {
//       alert("Component Unmounted");
//     };
//   }, []); 

//   return (
//     <div>
//       <h1>Card Component</h1>
//       <img src={state} width="300" />
//       <br />
//       <button
//         onClick={() =>
//           setState(
//             "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80"
//           )
//         }
//       >
//         Show Image
//       </button>
//     </div>
//   );
// }
  




import React, { useEffect, useState } from "react";

export default function Card() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000"
  );

  useEffect(() => {
    console.log("Mounted");
    return () => alert("Unmounted");
  }, []);

  return (
    <div>
      <h1>Card Component</h1>

      <img src={image} alt="2" width="300" />

      <br /><br />

      <button
        onClick={() =>
          setImage(
            "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80"
          )
        }
      >
        Change Image
      </button>
    </div>
  );
}
