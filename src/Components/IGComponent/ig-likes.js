import React from "react";

import upArrow from '../../Assets-main/icon-up.svg';
import igIcon from './Assets-IG/icon-instagram.svg';
export default function IG_Likes() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Likes</p>
                    <img src={igIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>5462</h1>
                    <p className='green'> <img src={upArrow} alt="" /> 2257%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}