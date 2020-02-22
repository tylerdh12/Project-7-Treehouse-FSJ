import React, { Component } from "react";
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

// CSS File applied for styling project
import "./App.css";

// Components that need to be imported into project
import SearchInput from "./Components/SearchInput";
import Nav from "./Components/Nav";
import Gallery from "./Components/Gallery";
import FourOhFour from "./Components/FourOhFour";
// import Loading from "./Components/Loading";

// Uses Environment variable to provide apiKey
const apiKey = process.env.apiKey;

// Limits the amount of images loaded per page can be setup as a feature late on
const resultsPerPage = 24;

class App extends Component {
  // Need to set the state of photos and loading at beginning of app load
  constructor() {
    super();
    this.state = {
      query: "aurora borealis",
      photos: [],
      loading: true
    };
  }

  // This runs the initial load of the content as soon at the application loads
  componentDidMount() {
    // if the user is at the root path then re-render the root content
    if (window.location.pathname === "/search/aurora%20borealis") {
      this.performSearch("aurora borealis");
    } else {
      // else take the window location remove the search path from string and search for the current path
      this.performSearch(window.location.pathname.substring(8));
    }
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
          <Route exact path="/">
            {/* Redirect the root to the search/aurora borealis directory to render */}
            <Redirect to="search/aurora%20borealis" />
          </Route>
          <Route
            path="/"
            render={props => (
              // render search input for all pages
              <SearchInput {...props} onSearch={this.performSearch} />
            )}
          />
          {/* render the navigation buttons */}
          <Nav onSearch={this.performSearch} />
          <Switch>
            {/* Using switch here because of multi component index page */}
            <Route
              exact
              path="/search/:query"
              render={props => (
                // Render the gallery with props passed
                <Gallery
                  {...props}
                  onSearch={this.performSearch}
                  photos={this.state.photos}
                  loading={this.state.loading}
                />
              )}
            />
            {/* Catch for 404 page */}
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
