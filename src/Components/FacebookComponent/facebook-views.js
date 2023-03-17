import React from "react";

import upArrow from '../../Assets-main/icon-up.svg';
import fbIcon from './Assets-facebook/icon-facebook.svg';
export default function FacebookViews() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Page Views</p>
                    <img src={fbIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>87</h1>
                    <p className='green'> <img src={upArrow} alt="" /> 3%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}