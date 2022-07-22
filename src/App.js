import './App.css';
import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';
import { ImageList } from '@mui/material'

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
      </header>

      <ImageList variant="masonry" cols={3} gap={8} className="imageList">
        {dogs.map((dog) => (<DogCard dog={dog} />))}
      </ImageList>
    </div>
  );
}

export default App;
