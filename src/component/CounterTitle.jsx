import React, { useEffect, useState } from "react";

function CounterTitle() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = "You clicked " + count + " times";
    }, [count]);

    return (
        <div>
            <h1> Counter</h1>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Clickme
            </button>
        </div>
    );
}

export default CounterTitle;
