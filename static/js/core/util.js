import lo from 'lodash';

export const partition = (items, n) => {
    var result = lo.groupBy(items, function(item, i) {
        return Math.floor(i % n);
    });
    return lo.values(result);
}

export const uniqueImdbIDs = (list) => lo.values(lo.keyBy(list, 'imdbID'));