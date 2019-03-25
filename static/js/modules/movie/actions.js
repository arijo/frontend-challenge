import * as types from './actionTypes';

export const setFavourites = (imdbID) => ({
    type: types.SET_FAVOURITES,
    imdbID: imdbID
})

