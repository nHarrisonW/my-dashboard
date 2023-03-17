import React from "react";
import upArrow from '../../Assets-main/icon-up.svg';

import downArrow from '../../Assets-main/icon-down.svg';
import ytIcon from './Assets-YT/icon-youtube.svg';

export default function YT_Views() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Total Views</p>
                    <img src={ytIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>107</h1>
                    <p className='red'> <img src={downArrow} alt="" /> 12%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}