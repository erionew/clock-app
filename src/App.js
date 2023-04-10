import './App.css';
import { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Details from './components/Details';

function App() {
  const [quote, setQuote] = useState('')
  const [location, setLocation] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  //fetching the quote. filtering out specific quotes so they fit in with the app design and theme
  const getQuote = () => {
    fetch('https://api.quotable.io/random?maxLength=100?tags=wise|success')
    .then(res => res.json())
    .then(data => setQuote(data))
  }
  //fetching the users location details from the db. This API will find the users ip address if it is not passed in as a parameter
  const getLocation = () => {
    fetch('https://timezoneapi.io/api/ip/?token=aDciZrpMVzNGvsLrYmoE')
    .then(res => res.json())
    .then(data => setLocation(data.data))
    .catch(err => console.log(err))
  }
  //calls the previous functions so the page can have information loaded in
  useEffect(() => {
    getQuote()
    getLocation()
  }, [])
  //this function is for the more/less button that toggles the display of the details component
  const buttonHandler = (e) => {
    setShowDetails(!showDetails)
    showDetails ? e.target.innerHTML=`More <i class="fa-solid fa-chevron-down"></i>` : e.target.innerHTML='Less <i class="fa-solid fa-chevron-up"></i>'
  }
  

  return (
    <div className="container--main">
      <div className='quote'>
        <p className='quote__content'>"{quote.content}"</p>
        <p className='quote__author'>&#8212; {quote.author}</p>
        <button onClick={getQuote}><i className="fa-solid fa-rotate-right"></i></button>
      </div>
      <div>
        {/* conditonal rendering */}
        {location ? <Clock location={location} buttonHandler={buttonHandler}/> : <p>Loading</p>}
        {showDetails && <Details location={location} /> }
      </div>
    </div>
  );
}

export default App;
