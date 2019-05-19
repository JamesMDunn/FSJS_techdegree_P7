import React from "react";

export default function Header(props) {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
}
