import React from "react";
import "./Movie.css";
import axios from "axios";
// import rotten_tomato from "./CFRT.png"

export default class Movie extends React.Component {
  state = {
    currentMovie: null,
    currentMovieAddInfo: null,
  };
  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=bf343ac25ffad3946e8e0afedf7b3c2f&append_to_response=videos,images`
    );
    const currentMovie = response.data;
    const imbdID = response.data.imdb_id;
    const newResponse = await axios.get(
      `http://www.omdbapi.com/?apikey=d16f267&i=${imbdID}&plot=full`
    );
    const currentMovieAddInfo = newResponse.data;
    console.log(currentMovieAddInfo);
    this.setState({
      currentMovie: currentMovie,
      currentMovieAddInfo: currentMovieAddInfo,
    });
  }

  render() {
    const movie = this.state.currentMovie;
    const details = this.state.currentMovieAddInfo;
    return (
      <div className="movieBody">
        {this.state.currentMovie && (
          <div className="movie">
            <div className="poster">
              <img
                className="tredningPhoto"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie"
              />
            </div>
            <div className="Context">
              <h1 className="title">
                TITLED:{movie.original_title || movie.original_name}
              </h1>
              <h2 className="tagline">"{movie.tagline}"</h2>
              <p className="overview">OVERVIEW:{movie.overview}</p>
              <p className="year">RELEASE_DATE:{movie.release_date}</p>
              <p className="popularity">VIEWS:{movie.popularity}</p>
              <p className="vote_average">ROTTEN TOMATO:{movie.vote_average}</p>
              {/* <img className="rotten_tomato"src={rotten_tomato} alt='rotten_tomato' /> */}
            </div>
          </div>
        )}
        <div className="currentMovieAddInfoBody">
          {this.state.currentMovieAddInfo && (
            <div className="imdbMovie">
              <p className="Rated">RATED:{details.Rated} </p>
              <p className="Actors">ACTORS:{details.Actors} </p>
              <p className="Awards">AWARDS:{details.Awards} </p>
              <p className="Director">DIRECTOR:{details.Director} </p>
              <p className="Genre">GENRE:{details.Genre} </p>
              <p className="Writer">WRITERS:{details.Writer} </p>
              <p className="imdbRating">IMDB_RATING: {details.imdbRating} </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
