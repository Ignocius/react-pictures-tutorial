import React from  'react';

const ImageList = ({ images }) => {
  const imageList = images.map(img => {
    return (
      <div className="four wide column">
        <img className="ui medium rounded image" src={img.urls.regular} key={img.id} />
      </div>
    );
  })
  return (
    <div className="ui grid">
      {imageList}
    </div>
  );
}

export default ImageList;