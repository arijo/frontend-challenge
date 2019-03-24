import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import Home from './modules/home/Home.jsx';
import Movie from './modules/movie/Movie.jsx';

const Routes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movie/:imdbID" component={Movie} />
                </Switch>
            </div>
        </ConnectedRouter>

    )
}

Routes.propTypes = {
    history: PropTypes.object
}

Routes.displayName = 'Routes';

export default Routes;