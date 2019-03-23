import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import createRouteReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const middleware = [
    thunk,
    routerMiddleware(history)
];
export default createStore(
    createRouteReducer(history),
    initialState,
    applyMiddleware(...middleware)
)