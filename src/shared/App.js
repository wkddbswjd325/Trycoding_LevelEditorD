import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Level1, Level2 } from 'pages';
import ChaptersList from '../components/chapters/ChaptersList';
import LevelComponent from '../components/level/LevelComponent';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact={true} path='/' component={ChaptersList}/>
                <Route path='/level1' component={LevelComponent}/>
            </div>
        );
    }
}

export default App;