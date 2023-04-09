import './App.css';
import { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Details from './components/Details';

function App() {
  const [quote, setQuote] = useState('')
  const [location, setLocation] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data))


  }, [])

  useEffect(() => {

    fetch('https://timezoneapi.io/api/ip/?token=aDciZrpMVzNGvsLrYmoE')
      .then(res => res.json())
      .then(data => setLocation(data.data))
      .catch(err => console.log(err))

  }, [])

  const buttonHandler = (e) => {
    setShowDetails(!showDetails)
    showDetails ? e.target.innerText='More' : e.target.innerText='Less'
  }
  

  return (
    <div className="App">
      <p>{quote.content}</p>
      {location ? <Clock location={location} buttonHandler={buttonHandler}/> : <p>Loading</p>}
      {showDetails && <Details location={location} /> }
    </div>
  );
}

export default App;
