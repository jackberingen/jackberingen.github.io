import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Back.css";

class Back extends Component {
  render() {
    return (
      <div className="Back-Button">
        <Link to="/">{"<"} BACK</Link>
      </div>
    );
  }
}

export default Back;