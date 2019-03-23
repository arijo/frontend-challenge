import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import Home from './modules/home/Home.jsx';
import Movie from './modules/movie/Movie.jsx';

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
