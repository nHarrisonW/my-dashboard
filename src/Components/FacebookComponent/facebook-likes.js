import React from "react";

import downArrow from '../../Assets-main/icon-down.svg';
import fbIcon from './Assets-facebook/icon-facebook.svg';
export default function FacebookLikes() {
    return (
        <>
        
        <div className="small-social-bg">
            <div className='small-box'>
                <div className='small-top'>
                    <p>Likes</p>
                    <img src={fbIcon} alt="" />
                </div>
                <div className='small-bottom'>
                    <h1>52</h1>
                    <p className='red'> <img src={downArrow} alt="" /> 2%</p>
                </div>
            </div>
        </div>
        
        </>
    );
}