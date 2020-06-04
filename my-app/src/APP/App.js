import React, { Component } from "react";
import "./App.css";
import Movie from "../Movie/Movie.jsx";
import Home from "../Home/Home.js";
import Search from "../Search/Search.js";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Link to="/" exact>
          <Header />
        </Link>
        <Route path="/SearchPage/:Searchtime">
          <Search />
        </Route>
        <div className="homepage" >
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Movie/:Movietime" render={(props) => (<Movie id={props.match.params.Movietime} />)} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;