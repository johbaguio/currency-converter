import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Converter from './Components/Converter/Converter';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Converter />
      </React.Fragment>
    )
  }
}

export default App;