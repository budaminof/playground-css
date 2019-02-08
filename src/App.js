import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><a href="#slide1">SLIDES 1</a></li>
            <li><a href="#slide2">SLIDES 2</a></li>
            <li><a href="#slide3">SLIDES 3</a></li>
          </ul>
        </nav>

        <ul className="slides">
          <li id="slide1">SLIDE 1</li>
          <li id="slide2">SLIDE 2</li>
          <li id="slide3">SLIDE 3</li>
        </ul>
      </div>
    );
  }
}

export default App;
