import React from 'react';
import A from 'hookrouter';

const NotFound = () => (
  <div className="full-height-bg card-container primary-grad">
    <A href="/">
      <h1 className="is-family-secondary" style={{ 'font-size': '80pt' }}>
        404.
      </h1>
    </A>
  </div>
);

export default NotFound;
