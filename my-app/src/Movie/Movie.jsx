import React from "react";
import "./Movie.css"
import { render } from "react-dom"

const Movie = (props) => {

  // componentDidMount = async () => {
  //   const fetchData = props.match.params.Movietime
  // }
  
    render( 
      <div className="body">
        {props.fetchData && props.fetchData.map(movie => (
    
          <div className='movie'>
            <div className="title-year">
              <h1 className='title'>{movie.title || movie.original_name}</h1>
              <p className='year'>{movie.release_date}</p>
            </div>
            <div className='poster'>
              <img className="tredningPhoto" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie' />
            </div>
          </div>
        ))}
      </div>
    )
  }

export default Movie;