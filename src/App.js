import { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';

import Header from "./components/Header";
import Counter from "./components/Counter";
import Button from './components/Button';
import QuoteBox from './components/QuoteBox';

function App() {

  // Jan 3, 6pm
  const hitchEnd = useMemo(() => new Date(2022, 1, 2, 6), [])
  // Dec 14, 6am
  // const hitchStart = useMemo(() => new Date(2021, 11, 14, 6), [])
  // Jan 19, 2023 @ 6pm
  const roleEnd = useMemo(() => new Date(2023, 0, 19, 18), [])
  // Jan 19, 2021 @ 6am
  // const roleStart = useMemo(() => new Date(2021, 0, 19, 6), [])

  // const [quote, setQuote] = useState()
  // const [author, setAuthor] = useState()

  const [hitchSeconds, setHitchSeconds] = useState(
    Math.floor((hitchEnd - new Date()) / 1000)
  )
  const [roleSeconds, setRoleSeconds] = useState(
    Math.floor((roleEnd - new Date()) / 1000)
  )

  // const getInspiration = async () => {
  //   const res = await fetch("https://zenquotes.io/api/random/")
  //   const data = await res.json()
  //   setQuote(data[0].q)
  //   setAuthor(data[0].a)
  // }

useEffect(() => {
  const interval = setInterval(() => setHitchSeconds(
    Math.floor((hitchEnd - new Date()) / 1000).toLocaleString(),
    1000)
  );
  return () => {
    clearInterval(interval)
  };
}, [hitchEnd])

useEffect(() => {
  const interval = setInterval(() => setRoleSeconds(
    Math.floor((roleEnd - new Date()) / 1000).toLocaleString(),
    1000)
  );
  return () => {
    clearInterval(interval)
  };
}, [roleEnd])

return (
  <div className='container'>
    <Header title='When Can Tyler Go Home?' />
    <Counter label='Total Seconds Until End of Hitch'
      value={hitchSeconds}
    />
    <Counter label='Approximate Seconds Remaining in Role'
      value={roleSeconds}
    />
    {/* <Button text='Click for Inspiration' color='black' onClick={getInspiration} />
    {quote && <QuoteBox quote={quote} author={author} />} */}
  </div>
);
}
export default App;
