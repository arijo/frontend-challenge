import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const movies = (state = [], action) => state;

export default (history) => combineReducers({
    router: connectRouter(history),
    movies: movies
});