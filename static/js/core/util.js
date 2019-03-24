import lo from 'lodash';

export const partition = (items, n) => {
    var result = lo.groupBy(items, function(item, i) {
        return Math.floor(i % n);
    });
    return lo.values(result);
}

export const uniqueImdbIDs = (list) => lo.values(lo.keyBy(list, 'imdbID'));

export const getRatings = (ratings) => {
    let index = {};
    (ratings || []).forEach(function(r) {
        if (r.Source === 'Internet Movie Database') {
            index['imdb'] = r.Value;
        }
        if (r.Source === 'Rotten Tomatoes') {
            index['rottenTomatoes'] = r.Value;
        }
        if (r.Source === 'Metacritic') {
            index['metacritic'] = r.Value;
        }
    })
    return index;
}