import lo from 'lodash';
import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Col, Row} from "react-grid-system";
import style from '../../../../css/modules/movie/MovieDetails.scss';
import {getRatings} from '../../../core/util';
import EmptySearch from "../../home/components/EmptySearch.jsx";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {movie} = this.props;
        if (!movie) return <EmptySearch/>
        const ratings = getRatings(movie.Ratings);
        const castList = lo.get(movie, 'Actors', '').split(',');
        const directors = lo.get(movie, 'Director', '').split(',');
        const genres = lo.get(movie, 'Genre', '').split(',');
        return (
            <div className={style.movieDetails} >
                <Row>
                    <Col sm={7}>
                        <Row>
                            <Col sm={12}>
                                <Link to={'/'}>
                                    <div className={style.backArrow}></div>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className={style.beforeTitle}>
                                    <span>{movie.Runtime}</span>
                                    <span className={style.dotSeparator}>.</span>
                                    <span>{movie.Year}</span>
                                    <span className={style.dotSeparator}>.</span>
                                    <span className={style.movieRated}>{movie.Rated}</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className={style.movieTitle}>{movie.Title}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className={style.beforePlot}>
                                    <span className={style.movieRating}>
                                        <span className={style.imdbLogoWrapper}>
                                            <span className={style.imdbLogo}></span>
                                        </span>
                                        <span className={style.movieRatingValue}>
                                            {lo.get(ratings, 'imdb', 'N/A')}
                                        </span>
                                    </span>
                                    <span className={style.movieMetascore}>
                                        <span className={style.rottenTomatoesLogoWrapper}>
                                            <span className={style.rottenTomatoesLogo}></span>
                                        </span>
                                        <span className={style.movieMetascoreValue}>
                                            {lo.get(ratings, 'rottenTomatoes', 'N/A')}
                                        </span>
                                    </span>
                                    <span className={style.addToFavourites}>
                                        <span className={style.heartIconWrapper}>
                                            <span className={style.heartIcon}></span>
                                        </span>
                                        <span className={style.addToFavouritesText}>
                                            Add to favourites
                                        </span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className={style.moviePlot}>
                                    <div className={style.plotHeader}>Plot</div>
                                    <div className={style.moviePlotDescription}>{movie.Plot}</div>
                                </div>
                            </Col>
                        </Row>
                        <Row className={style.extraInfo}>
                            <Col sm={4}>
                                <div className={style.castHeader}>Cast</div>
                                <ul className={style.castList}>
                                    {castList.map((participant, index) => {
                                        return <li key={index} className={style.participant}>{participant}</li>
                                    })}
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <div className={style.genreHeader}>Genre</div>
                                <ul className={style.castList}>
                                    {genres.map((genre, index) => {
                                        return <li key={index} className={style.genre}>{genre}</li>
                                    })}
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <div className={style.directorHeader}>Director</div>
                                <ul className={style.directors}>
                                    {directors.map((director, index) => {
                                        return <li key={index} className={style.director}>{director}</li>
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5}>
                        <div className={style.moviePoster} style={{backgroundImage: `url(${movie.Poster})`}} />
                    </Col>
                </Row>
            </div>

        )
    }
}

MovieDetails.propTypes = {
    movie: PropTypes.object
}

export default MovieDetails;