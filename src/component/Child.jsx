import React from 'react'

export default function Child(data) {
    console.log(data)
    return (

        
        <div>
            <h1>Child Component</h1>
            <p>{data.email}</p>

            

        </div>
    )
}



