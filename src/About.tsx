import React, { Component } from 'react';

import './Home.css';
class About extends Component {
  public render() {
    return <div className="Home">
      <div className="Home-header">
        <h2>Welcome to After.js</h2>
      </div>
      <p className="Home-intro">
        ABOUT
      </p>
    </div>;
  }
}

export default About;
