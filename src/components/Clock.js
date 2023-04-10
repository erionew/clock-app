import React from 'react'
import { useState, useEffect } from 'react';
import '../stylesheets/clock.css'

//passing the location and buttonHandler as props, so that the component can use the fetched API + button handler defined in the App component
export default function Clock({ location, buttonHandler }) {
    const [dateState, setDateState] = useState(new Date())
    //The API does show the minutes and seconds, but I didn't want to fetch the data every second.
    //My goal was to change the state of the 'dateState' every second to make sure the clock was as accurate as possible.
    //At first, the state updated every minute, but that didn't work because the minute would change based on when the user opened the page. 
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
