import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ChapterComponent from './components/chapters/ChaptersComponent.js';
import LevelsComponent from './components/level/LevelComponent.js';

class App extends Component {
  render() {
    return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={ChapterComponent} />
          <Route path="/chapters" component={ChapterComponent} />
          <Route path="/level" component={LevelsComponent} />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
