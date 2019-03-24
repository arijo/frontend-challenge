import lo from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../css/modules/movie/Movie.scss';
import {Col, Container, Row} from "react-grid-system";
import get from '../../core/api';
import openBasicMessage from '../../core/notifications';
import Spin from '../../core/Spin.jsx';
import MovieDetails from './components/MovieDetails.jsx';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            isFetching: false
        }
    }
    componentDidMount() {
        const {match} = this.props;
        this.setState({...this.state, isFetching: true});
        get({id: match.params.imdbID}).then(response => {
            const res = lo.get(response, 'data.Response', 'False' );
            if (res === 'True') {
                this.setState({
                    movie: lo.get(response, 'data', null),
                    isFetching: false
                })
            }
        }).catch(error => {
            openBasicMessage('error', error.message);
        })
    }
    render() {
        const {movie, isFetching} = this.state;
        return (
            <Spin isFetching={isFetching}>
                <Container className={style.container}>
                    <Row>
                        <Col sm={4}>
                            <div className={style.logo}/>
                        </Col>
                    </Row>
                    <MovieDetails movie={movie} />
            </Container>
            </Spin>
        )
    }
}

Movie.propTypes = {
    match: PropTypes.object
}

Movie.displayName = 'Movie';

export default Movie;