import React from 'react';
import style from '../../../css/modules/home/Home.scss';
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <div>
            <h1 className={`${style.title} ${style.R1R}`}>MOVIE PAGE PLACEHOLDER</h1>
            <p>
                <Link to="/"><span className="`${style.R4R}`">Home</span></Link>
                <span className="`${style.R4R}`"> | </span>
                <Link to="/movie"><span className="`${style.R4R}`">Movie</span></Link>
            </p>
        </div>
    )
}