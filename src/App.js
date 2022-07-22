import './App.css';
import React, { useEffect, useState } from 'react';

const Dog = (props) => {
  return (
    <>
      <h1>Breed: {props.breeds}</h1>
      <h2>Height: {props.height}</h2>
    </>
  )
}

const Dog1 = {
  "breeds": [],
  "height": 352,
  "id": "GLgO8VAmO",
  "url": "https://cdn2.thedogapi.com/images/GLgO8VAmO.png",
  "width": 329
}

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.thedogapi.com/v1/images/search?api_key=${API_KEY}&limit=20&order=Desc`;
  const fetchDogs = async () => {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    // Page load 100 dogs when the page starts
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cute Dogs!</h1>
        <div className="search">
          <input placeholder="Search for a dog breed" value="shiba" onChange={() => {}} />
          <button onClick={() => {}}>Search</button>
        </div>
      </header>
      <div className="container">
        <Dog className="card"/>
        <img src={ Dog1.url !== 'N/A' ? Dog1.url : 'https://via.placeholder.com/400'} alt="" />
      </div>
    </div>
  );
}

export default App;
