import React from "react";

export default function DashboardTitle(props) {
    return (
        <div className='d-block'>
            <h1 className='hero-text'>Social Media Dashboard</h1>
            <p>Total Followers: {props.followers}</p>
        </div>
    );
}