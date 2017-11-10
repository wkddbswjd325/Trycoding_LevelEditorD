import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import {Level1, Level2} from 'pages';


class Level extends Component {
    render() {
        return (
            <div>
                <Route exct path ="/" component={Level}/>
               <Switch>
                    <Route exact path="/Level1" component={Level1}/>
                    <Route exact path="/Level2" component={Level2}/>
                     <Route path="/Level2/:name" component={Level2}/>
                </Switch>
            </div>
        );
    }
}

export default Level;