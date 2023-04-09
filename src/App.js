import './App.css';
import { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Details from './components/Details';

function App() {
  const [quote, setQuote] = useState('')
  const [location, setLocation] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const getQuote = () => {
    fetch('https://api.quotable.io/random?maxLength=100?tags=wise|success')
    .then(res => res.json())
    .then(data => setQuote(data))
  }

  const getLocation = () => {
    fetch('https://timezoneapi.io/api/ip/?token=aDciZrpMVzNGvsLrYmoE')
    .then(res => res.json())
    .then(data => setLocation(data.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getQuote()
    getLocation()
  }, [])

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
        {location ? <Clock location={location} buttonHandler={buttonHandler}/> : <p>Loading</p>}
        {showDetails && <Details location={location} /> }
      </div>
    </div>
  );
}

export default App;
