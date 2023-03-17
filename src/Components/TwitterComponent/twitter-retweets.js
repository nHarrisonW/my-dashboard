import React from "react";
import upArrow from '../../Assets-main/icon-up.svg';

import downArrow from '../../Assets-main/icon-down.svg';
import twitterIcon from './Assets-twitter/icon-twitter.svg';
export default function TwitterRTs() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Retweets</p>
                    <img src={twitterIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>117</h1>
                    <p className='green'> <img src={upArrow} alt="" /> 303%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}