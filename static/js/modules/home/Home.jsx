import lo from "lodash";
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Col, Container, Row} from 'react-grid-system';
import style from '../../../css/modules/home/Home.scss';
import Spin from '../../core/Spin.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';

const Home = ({isFetching}) => {
    return (
        <Spin isFetching={isFetching}>
            <Container className={style.container}>
                <Row>
                    <Col sm={4}>
                        <div className={style.logo} />
                    </Col>
                </Row>
                <SearchBar />
                <SearchResults />
            </Container>
        </Spin>
    )
}

Home.propTypes = {
    isFetching: PropTypes.bool
};

const mapState = (state) => {
    return {
        isFetching: lo.get(state, 'home.isFetching', false)
    }
}

Home.displayName = 'Home';

export default connect(mapState)(Home);