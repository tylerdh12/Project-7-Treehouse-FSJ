import React, { Component } from "react";
// import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// CSS File applied for styling project
import "./App.css";

// Please use your own .config.js file to use this application
import apiKey from "./config";

// Components that need to be imported into project
import SearchInput from "./components/SearchInput";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

// Limits the amount of images loaded per page can be setup as a feature late on
const resultsPerPage = 24;

class App extends Component {
  // Need to set the state of photos and loading at beginning of app load
  constructor() {
    super();
    this.state = {
      query: "aurora borealis",
      photos: [],
      isLoading: true
    };
  }

  // This runs the initial load of the content as soon at the application loads
  componentDidMount() {
    this.performSearch(this.state.query);
  }

  // This runs the data request to the flickr API and returns the content
  performSearch = query => {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${resultsPerPage}&format=json&nojsoncallback=1`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res.photos.photo,
          loading: false
        });
      })
      // This will log an error if there was an issue fetching the data from flickr API
      .catch(error => {
        console.log(
          "There has been an error fetching the data requested",
          error
        );
      });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Route
            path="/"
            render={props => (
              <SearchInput {...props} onSearch={this.performSearch} />
            )}
          />
          <Nav onSearch={this.performSearch} />
          <Route exact path="/">
            <Redirect to="search/aurora%20borealis" />
          </Route>
          <Route
            path="/search/:query"
            render={props => (
              <Gallery
                {...props}
                onSearch={this.performSearch}
                photos={this.state.photos}
                isLoading={this.state.isLoading}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
