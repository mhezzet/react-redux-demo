import React, { Component } from 'react';
import BookList from './components/book-list';
import './App.css';
import BookDetails from './components/BookDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}

export default App;
