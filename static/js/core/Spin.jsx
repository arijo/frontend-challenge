import React from 'react';
import propTypes from 'prop-types';
import {Spin} from 'antd';
import style from "../../css/modules/home/Home.scss";
import '../../css/core/spin.css';

const LargeSpin = ({isFetching, children}) => {
    return (
        <div className={style.spinWrapper}>
            <Spin spinning={isFetching} size="large">
                {children}
            </Spin>
        </div>
    )
}

LargeSpin.propTypes = {
    isFetching: propTypes.bool,
    children: propTypes.object
}

LargeSpin.displayName = 'Spin';

export default LargeSpin;