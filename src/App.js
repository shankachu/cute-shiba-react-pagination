import './App.css';
import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.thedogapi.com/v1/images/search?api_key=${API_KEY}&limit=20&order=Desc`;
  const [dogs, setDogs]= useState([]);

  const fetchDogs = async () => {
    const response = await fetch(url, {});
    const data = await response.json();
    setDogs(data);
  };

  useEffect(() => {
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
        {dogs.map(dog => <DogCard dog={dog} />)}
      </div>
    </div>
  );
}

export default App;
