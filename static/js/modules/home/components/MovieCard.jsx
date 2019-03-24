import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../../css/modules/home/MovieCard.scss';


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
        const {movie} = this.props;
        const inlineStyles = {
            backgroundImage: `url(${movie.Poster})`
        }
        const classNames = [style.movieCard];
        if (this.state.showInfo) {
            classNames.push(style.showInfo);
        }
        return (
            <div className={classNames.join(' ')} style={inlineStyles} onMouseEnter={this.onMouseEnter}
                 onMouseLeave={this.onMouseLeave}>
                <div className={style.movieInfo}>
                    <div className={style.movieInfoFooter}>
                        <div className={style.movieTitle}>{movie.Title}</div>
                        <div className={style.movieYear}>{movie.Year}</div>
                    </div>
                </div>
            </div>
        )
    }
}

MovieCard.displayName = 'MovieCard';

MovieCard.propTypes = {
    movie: PropTypes.object
}

export default MovieCard;