import React from 'react'
import { withRouter } from "react-router-dom";
import "./Search.css";

class SearchPage extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    initialState: "Search for movies, shows, actors, etc...",
    currentText: ""
  }
}

searchMovie = async (e) => {
  e.preventDefault();
  this.props.history.push("/SearchPage/" + this.state.currentText)
};
  changeText(currentText) {
    this.setState({ currentText });
  }

render() {
  return (
      <div className="Search">
          <div>
            <div className="search-box">
              <form>
                <input
                  type="text"
                  placeholder={this.state.initialState}
                  onChange={(e) => this.changeText(e.target.value)}
                />
                <button onClick={this.searchMovie}>Movie Search</button>
              </form>
            </div>
          </div>
    </div>
  )
}
}


export default withRouter(SearchPage)