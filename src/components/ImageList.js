import React from  'react';

const ImageList = ({ images }) => {
  const imageList = images.map(({urls, id}) => {
    return (
      <div className="four wide column">
        <img className="ui medium rounded image" src={urls.regular} key={id} />
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