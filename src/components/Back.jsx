import React from 'react';
import { Link } from 'react-router-dom';
import './Back.css';

function Back() {
  return (
    <div className="Back-Button">
      <Link to="/">
        {'< BACK'}
      </Link>
    </div>
  );
}

export default Back;
