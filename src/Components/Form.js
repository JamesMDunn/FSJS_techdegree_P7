import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <input type="text" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}
