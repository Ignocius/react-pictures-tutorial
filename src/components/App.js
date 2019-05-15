import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], isLoading: false }
  }

  onSearchSubmit = async (term) => {
    this.setState({ isLoading: true })
    const { data } = await unsplash.get('search/photos', {
      params: {
        query: term
      }
    })
    console.log(data)
    this.setState({ images: data.results, isLoading: true })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;