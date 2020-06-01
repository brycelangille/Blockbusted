import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Movie from "./Movie.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentMovie: null,
      initialState: "Search for movies, shows, actors, etc...",
      currentText: " ",
    };
  }

  searchMovie = async () => {
    const currentMovie = await axios.get(
      "https://api.themoviedb.org/3/movie/550?api_key=bf343ac25ffad3946e8e0afedf7b3c2f"
    );
    this.setState({
      currentMovie: currentMovie.data.title,
    });
  };

    changeText(currentText) {
    this.setState({ currentText });
  }

  componentDidMount = async () => {
    this.searchMovie();
  };

  render() {
    return (
      <div className="app">
        <header className="head">Movie Search Application</header>
        <div class="search-box">
            <form>
              <input type="text" placeholder={this.state.initialState} onChange={this.changeText.bind(this, 'currentText')} />
              <button onClick={this.searchMovie}>Movie Search</button>
            </form>
          </div>
        <div className="body">
          {this.state.currentMovie && (
            <Movie movieData={this.state.currentMovie} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
