import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Movie.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: null,
    }
  }

  searchMovie = async () => {
    const currentMovie = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=bf343ac25ffad3946e8e0afedf7b3c2f")
    this.setState({
      currentMovie: currentMovie.data.results[0]
    })
  }

  componentDidMount = async() => {
  this.searchMovie()
  }


  render() {
    return (
      <div classNam='app'>
        <header className='head'>Movie Search Application</header>
        <div classNam='searchButtoon'>
          <button onClick={this.searchMovie}>Movie Search</button>
      </div>
      <div className='body'>
        {this.state.currentMovie && (
          <Movie userData={this.state.currentMovie} />
        )}
        </div>
        </div>  
    )
  }
}


export default App;
