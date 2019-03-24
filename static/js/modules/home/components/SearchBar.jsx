import lo from 'lodash';
import React from 'react';
import {Col, Row} from 'react-grid-system';
import style from '../../../../css/modules/home/Home.scss';
import store from '../../../store';
import {fetchMovies} from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.doSearch = lo.debounce(this.doSearch.bind(this), 1000, {});
    }
    doSearch(value) {
        store.dispatch(fetchMovies(value))
    }
    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <div className={style.searchBar}>
                            <span className={style.magnifier}></span>
                            <input onKeyUp={(e) => this.doSearch(e.target.value)} placeholder={'Search movies ...'}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SearchBar;
