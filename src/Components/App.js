import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import apiKey from "../config";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      cats: [],
      dogs: [],
      computers: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch("cats");
    this.performSearch("dogs");
    this.performSearch("computers");
  }

  performSearch = search => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.photos);
        if (search === "cats") {
          this.setState({ cats: data.photos.photo });
        } else if (search === "dogs") {
          this.setState({ dogs: data.photos.photo });
        } else if (search === "computers") {
          this.setState({ computers: data.photos.photo });
        } else {
          this.setState({ images: data.photos.photo });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    const { images, cats, dogs, computers, isLoading } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          <Header title="Gallery" />
          <Search onSearch={this.performSearch} />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/cats"
              render={() => <Gallery results={cats} name="Cats" />}
            />
            <Route
              exact
              path="/dogs"
              render={() => <Gallery results={dogs} name="Dogs" />}
            />
            <Route
              exact
              path="/computers"
              render={() => <Gallery results={computers} name="Computers" />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
