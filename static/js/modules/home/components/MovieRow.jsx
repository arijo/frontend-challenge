import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-grid-system';
import style from '../../../../css/modules/home/MovieRow.scss';
import MovieCard from './MovieCard.jsx';

const MovieRow = ({movies}) => {
    return (
        <Row className={style.movieRow}>
            {movies.map(movie => {
                return (
                    <Col key={movie.imdbID} sm={2}>
                        <MovieCard movie={movie}/>
                    </Col>
                )
            })}
        </Row>
    )
}

MovieRow.propTypes = {
    movies: PropTypes.array
}

MovieRow.displayName = 'MovieRow';

export default MovieRow;