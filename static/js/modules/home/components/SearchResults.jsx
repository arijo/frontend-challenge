import lo from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {uniqueImdbIDs} from '../../../core/util';
import {partition} from '../../../core/util';
import openBasicMessage from '../../../core/notifications';
import EmptySearch from './EmptySearch.jsx';
import MovieRow from './MovieRow.jsx';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        const {error} = this.props;
        if (error) openBasicMessage('error', error.message);
    }
    render() {
        const {searchResults} = this.props;
        const rows = partition(uniqueImdbIDs(searchResults), 6);
        if (rows.length) return (
            rows.map((movies, index) => {
                return <MovieRow key={index} movies={movies}></MovieRow>
            })
        )
        return <EmptySearch/>
    }
}

SearchResults.propTypes = {
    searchResults: PropTypes.array,
    error: PropTypes.object
};

const mapState = (state) => {
    return {
        searchResults: lo.get(state, 'home.searchResults', []),
        error: lo.get(state, 'home.error', null)
    }
}

export default connect(mapState)(SearchResults)