import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to="/" >Frontend Online Store</Link></h1>
      </header>
    );
  }
}

export default Header;
