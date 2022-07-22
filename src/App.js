import './App.css';
import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';
import { Container, ImageList, Pagination } from '@mui/material'

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const defaultUrl = `https://api.thedogapi.com/v1/images/search?api_key=${API_KEY}&limit=10&page=1`;
  const [dogs, setDogs] = useState([]);
  const [url, setURL] = useState(defaultUrl);
  const [page, setPage] = useState(1);

  const fetchDogs = async () => {
    const response = await fetch(url, {});
    const data = await response.json();
    setDogs(data);
  };

  useEffect(() => {
    fetchDogs();
  }, [url]);

  const handlePageSelection = (event, value) => {
    setPage(value);
    const newURL = `https://api.thedogapi.com/v1/images/search?api_key=${API_KEY}&limit=10&page=${value}`;
    setURL(newURL);
  };

  return (
    <Container>
      <header className="App-header">
        <h1>Cute Dogs!</h1>
      </header>

      <Pagination count={10} defaultPage={page} className="pagination" onChange={handlePageSelection}/>
      <ImageList variant="masonry" cols={3} gap={8} className="imageList">
        {dogs.map((dog) => (<DogCard dog={dog} />))}
      </ImageList>
    </Container>
  );
}

export default App;
