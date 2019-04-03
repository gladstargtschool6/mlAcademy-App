import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div
    className="full-height-bg card-container primary-grad"
    style={{ display: 'flex', 'justify-content': 'center', alignItems: 'center' }}
  >
    <Link to="/">
      <h1 className="is-family-secondary" style={{ 'font-size': '80pt' }}>
        404.
      </h1>
    </Link>
  </div>
);

export default NotFound;
