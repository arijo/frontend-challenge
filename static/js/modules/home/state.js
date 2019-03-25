import lo from 'lodash';
import * as types from './actionTypes';

const ROOT_REDUCER_KEY = 'home';

const initialState = {
    isFetching: false,
    searchResults: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCHING_STARTED:
            return {
                ...state,
                isFetching: true
            };
        case types.FETCHING_FINISHED:
            return {
                ...state,
                isFetching: false
            };
        case types.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: lo.get(action, 'searchResults.data.Search', [])
            };
        case types.INVALIDATE_SEARCH_RESULTS:
            return {
                ...state,
                isFetching: false,
                searchResults: []
            };
        case types.FETCHING_ERROR:
            return {
                ...state,
                searchResults: [],
                error: action.error,
                isFetching: false
            }
        default:
            return state;
    }
}

export {reducer, initialState, ROOT_REDUCER_KEY}
