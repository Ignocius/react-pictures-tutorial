import './ImageList.css';
import React from  'react';
import ImageCard from  './ImageCard';

const ImageList = ({ images }) => {
  const imageList = images.map((image) => {
    return (
     <ImageCard image={image}  key={image.id}/>
    );
  })
  return (
    <div className="image-list">
      {imageList}
    </div>
  );
}

export default ImageList;