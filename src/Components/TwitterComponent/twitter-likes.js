import React from "react";
import upArrow from '../../Assets-main/icon-up.svg';

import downArrow from '../../Assets-main/icon-down.svg';
import twitterIcon from './Assets-twitter/icon-twitter.svg';
export default function TwitterLikes() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Likes</p>
                    <img src={twitterIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>507</h1>
                    <p className='green'> <img src={upArrow} alt="" /> 553%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}