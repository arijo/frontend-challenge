import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import style from '../../../../css/modules/home/MovieCard.scss';
import lo from "lodash";
import {connect} from "react-redux";


class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showInfo: false};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    onMouseEnter() {
        this.setState({showInfo: true});
    }
    onMouseLeave() {
        this.setState({showInfo: false});
    }
    render() {
        const {movie, isFavourite} = this.props;
        const inlineStyles = {
            backgroundImage: `url(${movie.Poster})`
        }
        const classNames = [style.movieCard];
        if (this.state.showInfo) {
            classNames.push(style.showInfo);
        }
        return (
            <Link to={`/movie/${movie.imdbID}`}>
                <div className={classNames.join(' ')} style={inlineStyles} onMouseEnter={this.onMouseEnter}
                     onMouseLeave={this.onMouseLeave}>
                    <div className={style.movieInfo}>
                        <div className={style.movieInfoFooter}>
                            <div className={style.movieTitle}>{movie.Title}</div>
                            <div className={style.movieYear}>{movie.Year}</div>
                        </div>
                        <div className={isFavourite ? style.addedToFavourites : style.addToFavourites}>
                            <span className={isFavourite ? style.heartIconFull : style.heartIcon}/>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

MovieCard.displayName = 'MovieCard';

MovieCard.propTypes = {
    movie: PropTypes.object,
    isFavourite: PropTypes.bool,
}

const mapState = (state, ownProps) => {
    const favourites = lo.get(state, 'movie.favourites', []);
    return {
        isFavourite: favourites.some(imdbID => lo.get(ownProps, 'movie.imdbID', null) === imdbID)
    }
}

export default connect(mapState)(MovieCard)