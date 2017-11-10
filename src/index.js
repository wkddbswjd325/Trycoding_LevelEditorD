import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './shared/App';
import registerServiceWorker from './registerServiceWorker';
//jieun
import Root from './components/chapters/ChaptersList';
import LevelComponent from './components/level/LevelComponent';



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();