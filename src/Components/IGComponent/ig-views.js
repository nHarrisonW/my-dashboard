import React from "react";

import upArrow from '../../Assets-main/icon-up.svg';
import igIcon from './Assets-IG/icon-instagram.svg';
export default function IGViews() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Profile Views</p>
                    <img src={igIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>52k</h1>
                    <p className='green'> <img src={upArrow} alt="" /> 1375%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}