import React, { useEffect, useState } from 'react'

export default function LocalStorage() {
    const[state,setState]=useState({
        name:"",
        email:""
    })

    const[data,setData]=useState(()=>{
        var saveData=JSON.parse(localStorage.getItem("data"))
        return saveData||[]
    })

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
    },[data])

    function SubmitForm(e){
        e.preventDefault()
        setData([...data,state])
    }
  return (
    <div>
<h1>LocalStorage</h1>
<form onSubmit={SubmitForm}>
    <label>First Name:</label>
    <input type="text" id="name" name="name" onChange={((e)=>setState({
        ...state,
        name:e.target.value
    }))} />
    <br />
    <input type="text" id="email" name="email" onChange={((e)=>setState({

        ...state,
        email:e.target.value
    }))} />
    <input type="Submit" />
</form>

{
    data.map((el,i)=>{
        return<>
        <li>{el.name}</li>
        <li>{el.email}</li>
        </>
    })
}
  <ul>
       
            <button >Edit</button>
            <button >Delete</button>
          

        </ul>
    
    </div>
  )
}
