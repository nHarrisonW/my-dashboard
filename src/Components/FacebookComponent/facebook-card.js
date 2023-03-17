import React from "react";

import upArrow from '../../Assets-main/icon-up.svg';
import fbIcon from './Assets-facebook/icon-facebook.svg';
export default function FacebookCard() {
    return (
        <>
        
        <div id="fb-bg" className="social-bg">
        <div className="card-top">
            <img src={fbIcon} alt="" /><p>@nathanf</p>
        </div>
        <div className='social-body'>
            <h1>1987</h1>
            <p>Followers</p>
        </div>
        <div className='social-foot'>
            <h6 className='green'><img src={upArrow} alt="" /> 12 today</h6>
        </div>
        </div>
        
        </>
    );
}