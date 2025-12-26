// import React, { useState } from 'react'
// import "./Todo.css";

// export default function Todo() {

    // const [text, setText] = useState("")
    // const [state, setState] = useState([])
    // const [editIndex, setEditIndex] = useState(null)

//     function addText(e) {
//         setText(e.target.value)
//     }

//     function HandleSubmit(e) {
//         e.preventDefault()

//         if (text.trim() === "") return

//         if (editIndex !== null) {
//             let updated = state.map((el, i) => {
//                 if (i === editIndex) {
//                     return text
//                 }
//                 return el
//             })

//             setState(updated)
//             setEditIndex(null)
//             setText('')
//             return
//         }

//         setState([...state, text])
//         setText('')
//     }

//     function deleteBtn(id) {
//         let deleted = state.filter((el, i) => i !== id)
//         setState(deleted)
//     }

//     function editBtn(id) {
//         setText(state[id])
//         setEditIndex(id)
//     }

//     return (
//         <div className='todo-container'>
//             <h1>Todo</h1>

//             <form onSubmit={HandleSubmit}>
//                 <input
//                     type="text"
//                     placeholder='enter the name'
//                     value={text}
//                     onChange={addText}
//                 />
//                 <input type="submit" />
//             </form>

//             {
//                 state.map((el, i) => {
//                     return (
//                         <div key={i}>
//                             <span>{el}</span>
//                             <button onClick={() => editBtn(i)}>edit</button>
//                             <button onClick={() => deleteBtn(i)}>delete</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }










