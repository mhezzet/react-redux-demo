import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
