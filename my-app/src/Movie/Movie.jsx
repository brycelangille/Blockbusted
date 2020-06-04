import React from "react";
import "./Movie.css";
import axios from "axios";

export default class Movie extends React.Component {
  state = {
    currentMovie: null
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=bf343ac25ffad3946e8e0afedf7b3c2f`
    );
    const currentMovie = response.data
    const imdb = response.data.imdb_id
    
    this.setState({
      currentMovie: currentMovie,
      imdb: imdb
    });
    
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.imdb}?api_key=bf343ac25ffad3946e8e0afedf7b3c2f&append_to_response=videos,images`
    );
    const details = response.data
    this.setState({
      details
    });
  }

  render() {
    const movie = this.state.currentMovie
    return (
      <div className="body">
        {this.state.currentMovie &&
          <div className='movie'>
           <div className='poster'>
              <img className="tredningPhoto" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie' />
          </div>
            <div className="Context">
            <h1 className='title'>{movie.original_title || movie.original_name}</h1>
            <h2 className='tagline'>{movie.tagline}</h2>
            <p className='year'>{movie.release_date}</p>
            <p className='overview'>{movie.overview}</p>
            <p className='popularity'>{movie.popularity}</p>
            <p className='vote_average'>{movie.vote_average}</p>
            <p className='runtime'>{movie.runtime}</p>
            </div>
          </div>
        }
        {/* <div className="imdbBody">
          {this.state.imdb &&
            <div className='imdbMovie'>
            
            </div>
  } */}
      </div>
    )
  }

}