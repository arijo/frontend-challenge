import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import Home from './Home.jsx';
import Movie from './Movie.jsx';

export default ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movie" component={Movie} />
                </Switch>
            </div>
        </ConnectedRouter>

    )
}
