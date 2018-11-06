import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostCreate from './components/PostCreate';
import PostsShow from './components/PostsShow';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/new" component={PostCreate} />
          <Route path="/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
