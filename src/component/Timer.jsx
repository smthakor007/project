import React, { useEffect, useState } from 'react'
export default function Timer() {
  const [timer, setTimer] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!start) return

    const sunil = setTimeout(() => { 
      setTimer(timer + 1)
    }, 100)

    return () => clearTimeout(sunil)
  }, [timer, start])

  return (
    <div>
      <h1>Timer  {timer} </h1>

      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
    </div>
  )
}
