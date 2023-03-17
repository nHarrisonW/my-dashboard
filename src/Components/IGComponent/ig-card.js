import React from "react";

import upArrow from '../../Assets-main/icon-up.svg';
import igIcon from './Assets-IG/icon-instagram.svg';
export default function IG_Card() {
    return (
        <>
        
        <div id="ig-bg" className="social-bg">
        <div className="card-top">
            <img src={igIcon} alt="" /><p>@nathanf</p>
        </div>
        <div className='social-body'>
            <h1>11k</h1>
            <p>Followers</p>
        </div>
        <div className='social-foot'>
            <h6 className='green'><img src={upArrow} alt="" /> 99 today</h6>
        </div>
        </div>
        
        </>
    );
}