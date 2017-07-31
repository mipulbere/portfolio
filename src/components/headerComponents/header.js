import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
      IM A HEADER

      <nav>
        <ul>
          <li>
            <a href = "#"> HOME </a>
          </li>
          <li>
            <a href = "#"> ABOUT ME </a>
          </li>
          <li>
            <a href = "#"> PROJECTS </a>
          </li>
          <li>
            <a href = "#"> CONTACT ME </a>
          </li>
        </ul>
      </nav>
      </header>
    );
  }
}

export default Header;
