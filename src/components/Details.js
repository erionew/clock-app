import React from 'react'
import '../stylesheets/details.css'

export default function Details({ location }) {
  return (
    <div className='details'>
      <div>
        <div className='details__element'>
          <h4 className='details__title'>Current Timezone</h4>
          <p className='details__content'>{location.timezone.id}</p>
        </div>
        <div className='details__element'>
          <h4 className='details__title'>Day of the week</h4>
          <p className='details__content'>{location.datetime.day_full}</p>
        </div>
      </div>
      <div>
        <div className='details__element'>
          <h4 className='details__title'>Month</h4>
          <p className='details__content'>{location.datetime.month_full}</p>
        </div>
        <div className='details__element'>
          <h4 className='details__title'>Week Number</h4>
          <p className='details__content'>{location.datetime.week}</p>
        </div>
      </div>
    </div>
  )
}
