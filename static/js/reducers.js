import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import * as movies from './modules/home/state';

const states = [
    movies
];

const reducersMountData = states.reduce((acc, state) => {
    return { ...acc, [state.ROOT_REDUCER_KEY]: state.reducer }
}, {})

export default (history) => combineReducers({
    router: connectRouter(history),
    ...reducersMountData
});