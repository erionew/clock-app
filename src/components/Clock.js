import React from 'react'
import { useState, useEffect } from 'react';

export default function Clock({ location }) {
    const [dateState, setDateState] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000)
    }, dateState )

  return (
    <div>
      <p>{String(dateState.getMinutes()).padStart(2, "0")}</p>
    </div>
  )
}
