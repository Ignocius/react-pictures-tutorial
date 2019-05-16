import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    const { image } = this.props
    const { description, urls } = image
    return (
      <div className="image-container">
        <img className="ui rounded " alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;