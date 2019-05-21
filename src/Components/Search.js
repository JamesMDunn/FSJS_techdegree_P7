import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let search = this.query.value;
    this.props.onSearch(search);
    let path = "/search/" + search;
    console.log(path);
    this.props.history.push(path);
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

export default withRouter(Search);
