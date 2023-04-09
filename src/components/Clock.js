import React from 'react'
import { useState, useEffect } from 'react';
import '../stylesheets/clock.css'

export default function Clock({ location, buttonHandler }) {
    const [dateState, setDateState] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000)
    }, dateState )

  return (
    <div className='clock'>
      <p className='clock__greeting'>Good {location.datetime.timeday_gen}, it's currently</p>
      <p className='clock__time'>{location.datetime.hour_12_wolz}:{String(dateState.getMinutes()).padStart(2, "0")} <span className='clock__timezone'>{location.datetime.offset_tzab}</span></p>
      <p className='clock__location'>In {location.state == null ? `${location.country}, ${location.timezone.wmo}` : `${location.city}, ${location.state_code}`} </p>
      <button className='clock__button' onClick={buttonHandler}>More<i className="fa-solid fa-chevron-down"></i></button>
    </div>
  )
}
