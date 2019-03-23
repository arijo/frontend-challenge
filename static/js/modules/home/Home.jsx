import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import style from '../../../css/modules/home/Home.scss';

export default (props) => {
    return (
        <Container className={style.container}>
            <Row>
                <Col sm={4}>
                    <div className={style.logo}></div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className={style.searchBar}>
                        <span className={style.magnifier}></span>
                        <input placeholder={'Search movies ...'}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className={style.illustrationEmpty}></div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className={style.marketingCopy}>
                        <div className={style.question}>Don't know what to search?</div>
                        <div className={style.proposal}>Here's an offer you can't refuse</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}