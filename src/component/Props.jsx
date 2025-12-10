import React, { useState } from 'react'
import Child from './Child'
export default function Props({ props }) {
    const [state, setState] = useState({

        name: "sunil",
        email: "sm19@gmail.com"
    })
    return (
        <div>
            <h1>
                parent component
            </h1>
            <p>{state.name}</p>


            <Child data={state} />


        </div>
    )
}


