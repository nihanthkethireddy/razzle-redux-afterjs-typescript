import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {

  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Welcome to After.js</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </p>
        <Link to="/about">About -></Link>
      </div>
    );
  }
}

export default Home;
