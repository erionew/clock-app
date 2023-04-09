import React from 'react'
import { useState, useEffect } from 'react';

export default function Clock({ location, buttonHandler }) {
    const [dateState, setDateState] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000)
    }, dateState )

  return (
    <div>
        <p>Good {location.datetime.timeday_gen}, it's currently</p>
      <p>{location.datetime.hour_12_wolz}:{String(dateState.getMinutes()).padStart(2, "0")} <span>{location.datetime.offset_tzab}</span></p>
      <p>In {location.state == null ? `${location.country}, ${location.timezone.wmo}` : `${location.city}, ${location.state_code}`} </p>
      <button onClick={buttonHandler}>More</button>
    </div>
  )
}
