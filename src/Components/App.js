import React, { Component } from "react";
import ReactLoading from "react-loading";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import Gallery from "./Gallery";
import Error404 from "./Error404";
import apiKey from "../config";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
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
    this.setState({ isLoading: true });
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(data => {
        // if (search !== null) {
        //   this.setState({ search });
        // }
        console.log(data.photos);
        if (search === "cats") {
          this.setState({ cats: data.photos.photo, isLoading: false });
        } else if (search === "dogs") {
          this.setState({ dogs: data.photos.photo, isLoading: false });
        } else if (search === "computers") {
          this.setState({ computers: data.photos.photo, isLoading: false });
        } else {
          this.setState({
            images: data.photos.photo,
            search: search,
            isLoading: false
          });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    const { images, cats, dogs, computers, isLoading, search } = this.state;
    return (
      <BrowserRouter basename="/FSJS_techdegree_P7">
        <div className="container">
          <Header title="Gallery" />
          <Search onSearch={this.performSearch} />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                isLoading ? <Spinner /> : <Redirect to="/computers" />
              }
            />
            <Route
              exact
              path="/search/:name"
              render={() =>
                isLoading ? (
                  <Spinner />
                ) : (
                  <Gallery results={images} name={search} />
                )
              }
            />
            <Route
              exact
              path="/cats"
              render={() =>
                isLoading ? <Spinner /> : <Gallery results={cats} name="Cats" />
              }
            />
            <Route
              exact
              path="/dogs"
              render={() =>
                isLoading ? <Spinner /> : <Gallery results={dogs} name="Dogs" />
              }
            />
            <Route
              exact
              path="/computers"
              render={() =>
                isLoading ? (
                  <Spinner />
                ) : (
                  <Gallery results={computers} name="Computers" />
                )
              }
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
