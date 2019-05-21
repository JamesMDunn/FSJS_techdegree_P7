import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header(props) {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
}
