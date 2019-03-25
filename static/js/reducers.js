import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import * as home from './modules/home/state';
import * as movie from './modules/movie/state';

const states = [
    home,
    movie
];

const reducersMountData = states.reduce((acc, state) => {
    return { ...acc, [state.ROOT_REDUCER_KEY]: state.reducer }
}, {})

export default (history) => combineReducers({
    router: connectRouter(history),
    ...reducersMountData
});