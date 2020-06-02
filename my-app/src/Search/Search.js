import React from 'react'
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Search extends React.Component {
    constructor() {
      super();
      this.state = {
        currentMovie: null,
        initialState: "Search for movies, shows, actors, etc...",
        currentText: " ",
      };
    }
    componentDidMount = async (props) => {
      const search = this.props.match.params.Searchtime;
      const currentMovie = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=bf343ac25ffad3946e8e0afedf7b3c2f&query=${search}`
      );
      this.setState({
        currentMovie: currentMovie.data.results,
      });
    };

render () {
  return (
    <div className="content">
      {this.state.currentMovie && this.state.currentMovie.map(movie => (
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

export default withRouter(Search)