import React from 'react';
import { ImageListItem } from '@mui/material'

const DogCard = ({ dog }) => {
  return (
    <ImageListItem>
      <img
        src={ dog.url !== 'N/A' ? `${dog.url}?w=164&h=164&fit=crop&auto=format` : 'https://via.placeholder.com/400'}
        srcSet={`${dog.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
  );
}

export default DogCard;
