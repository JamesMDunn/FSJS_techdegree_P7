import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let search = this.query.value;
    this.props.onSearch(search);

    e.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            ref={input => (this.query = input)}
            required
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}
