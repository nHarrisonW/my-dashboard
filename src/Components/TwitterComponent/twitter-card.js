import React from "react";

import upArrow from '../../Assets-main/icon-up.svg';
import twitterIcon from './Assets-twitter/icon-twitter.svg';

export default function TwitterCard() {
    return (
        <>
        <div id="twitter-bg" className="social-bg">
        <div className="card-top">
            <img src={twitterIcon} alt="" /><p>@nathanf</p>
        </div>
        <div className='social-body'>
            <h1>1044</h1>
            <p>Followers</p>
        </div>
        <div className='social-foot'>
            <h6 className='green'><img src={upArrow} alt="" /> 1099 today</h6>
        </div>
        </div>
        </>
    );
}