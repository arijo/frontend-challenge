import * as types from './actionTypes';

const ROOT_REDUCER_KEY = 'movie';

const initialState = {
    favorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.imdbID]
            };
        default:
            return state;
    }
}

export {reducer, initialState, ROOT_REDUCER_KEY}
