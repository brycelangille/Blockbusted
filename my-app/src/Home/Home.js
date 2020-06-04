import React, { Component } from 'react'
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  async componentDidMount () {
      const trendingMovie = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=bf343ac25ffad3946e8e0afedf7b3c2f`
      );
      this.setState({
        trendingMovie: trendingMovie.data.results
      });
    console.log(trendingMovie)
    }
  render() {
    return (
    <div className='body'>
        {this.state.trendingMovie && this.state.trendingMovie.map(movie => (
          <Link to={`/Movie/${movie.id}`}>
          <div className="trending">
            <img className="tredningPhoto" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie' />
            <p className="trendingName">{movie.title || movie.original_name}</p>
          </div>
          </Link>
        ))}
      </div>
        )
      }
}  
  




