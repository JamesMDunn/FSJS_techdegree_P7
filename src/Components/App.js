import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import apiKey from "../config";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Gallery" />
        <Form />
        <Navbar />
        <Gallery search={this.state.cats} />
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.performSearch();
    this.performSearch("cats");
    // this.performSearch("dogs");
    // this.performSearch("computers");
  }

  performSearch = search => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.photos.photo);
        //this.setState({ cats: data.photos.photo });
      })
      .catch(error => console.log(error));
  };
}

export default App;
