import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [current, setCurrent] = useState([])
  const [previous, setPrevious] = useState([])
  const [upcoming, setUpcoming] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1ce5217f4mshf903431d8cda75ep175079jsn1efbd9f5f6f9',
        'X-RapidAPI-Host': 'cricket-live-score4.p.rapidapi.com'
      }
    };

    fetch(process.env.REACT_APP_CRICKET_API, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.data)
        setCurrent(response.data.current);
        setPrevious(response.data.completed)
        setUpcoming(response.data.upcoming);
      })
      .catch(err => console.error(err));
  }, [])


  return (
    <>

      <a href="#current"><span>Current Match</span></a>
      <a href="#upcoming"><span>Upcoming Match</span></a>
      <a href="#previous"><span>Previous Match</span></a>

      {/* currentMatch section  */}

      <section className='currentMatch' id='current'>
        <h1>Current match</h1>
        {current.map((data, index) => {
          return <div className='databox' key={index} style={{ margin: '1rem', backgroundColor: 'green', color: 'white' }}>
            <div className='dates'>Date: {data["dates "]}</div>
            <div className='series_name'>Series Name: {data.series_name}</div>
            <div className='series_type'>Format: {data["series_type "]}</div>
            <div className='total_matches'>Number of Match: {data["total_matches "]}</div>
            <div className='total_teams'>Number of Team: {data["total_teams "]}</div>
          </div>
        })}

      </section>

      {/* upcommingMatch section  */}
      <section className='upcomingMatch' id='upcoming'>
        <h1>Upcoming match</h1>
        {upcoming.map((data, index) => {
          return <div className='databox' key={index} style={{ margin: '1rem', backgroundColor: 'green', color: 'white' }}>
            <div className='dates'>Date: {data["dates "]}</div>
            <div className='series_name'>Series Name: {data.series_name}</div>
            <div className='series_type'>Format: {data["series_type "]}</div>
            <div className='total_matches'>Number of Match: {data["total_matches "]}</div>
            <div className='total_teams'>Number of Team: {data["total_teams "]}</div>
          </div>
        })}

      </section>

      {/* previousMatch section  */}
      <section className='previousMatch' id='previous'>
        <h1>Previous match</h1>
        {previous.map((data, index) => {
          return <div className='databox' key={index} style={{ margin: '1rem', backgroundColor: 'green', color: 'white' }}>
            <div className='dates'>Date: {data["dates "]}</div>
            <div className='series_name'>Series Name: {data.series_name}</div>
            <div className='series_type'>Format: {data["series_type "]}</div>
            <div className='total_matches'>Number of Match: {data["total_matches "]}</div>
            <div className='total_teams'>Number of Team: {data["total_teams "]}</div>
          </div>
        })}
      </section>


    </>
  );
}

export default App;
