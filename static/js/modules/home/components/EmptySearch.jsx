import React from 'react';
import {Col, Row} from 'react-grid-system';
import style from "../../../../css/modules/home/Home.scss";

const EmptySearch = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <div className={style.illustrationEmpty}></div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className={style.marketingCopy}>
                        <div className={style.question}>Don&apos;t know what to search?</div>
                        <div className={style.proposal}>Here&apos;s an offer you can&apos;t refuse</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

EmptySearch.displayName = 'EmptySearch';

export default EmptySearch;