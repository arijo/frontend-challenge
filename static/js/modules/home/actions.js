import lo from 'lodash';
import get from '../../core/api';
import * as types from './actionTypes';

const fetchingStarted = () => ({
    type: types.FETCHING_STARTED
})

const fetchingError = (error) => ({
    type: types.FETCHING_ERROR,
    error: error
})

const fetchingFinished = () => ({
    type: types.FETCHING_FINISHED
})

export const setSearchResults = (searchResults) => ({
    type: types.SET_SEARCH_RESULTS,
    searchResults: searchResults
})

export const invalidateSearchResults = () => ({
    type: types.INVALIDATE_SEARCH_RESULTS
})

export const fetchMovies = (query) => (dispatch) => {
    dispatch(fetchingStarted());
    if (!query || query.length < 3) return dispatch(invalidateSearchResults()); // avoid too many results
    get({query: query}).then(response => {
        const res = lo.get(response, 'data.Response', 'False');
        if (res === 'True') return dispatch(setSearchResults(response));
        dispatch(fetchingError(new Error(lo.get(response, 'data.Error', 'Unknown Error'))));
    }).catch(error => {
        dispatch(fetchingError(error));
    }).then(() => {
        dispatch(fetchingFinished());
    });
}
