import './App.css';
import { useState, useEffect } from 'react';
import Clock from './components/Clock';

function App() {
  const [quote, setQuote] = useState('')
  const [location, setLocation] = useState('')

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


console.log(location)

  

  return (
    <div className="App">
      <p>{quote.content}</p>
      {location ? <Clock location={location} /> : <p>Loading</p>}
    </div>
  );
}

export default App;
