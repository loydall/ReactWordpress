import React, { Component } from 'react';
import './App.css';

import PostList from './components/postList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title"></h1>
        </header>
        <section className="App-intro">
          <PostList />
        </section>
      </div>
    );
  }
}

export default App;
