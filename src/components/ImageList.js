import React from  'react';

const ImageList = ({ images }) => {
  const imageList = images.map(({urls, id, description}) => {
    return (
      <div className="four wide column" key={id}>
        <img className="ui medium rounded image" alt={description} src={urls.regular} />
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