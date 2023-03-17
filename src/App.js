import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


import './style.css'

import DashboardTitle from "./Components/dashboard";
import FacebookCard from "./Components/FacebookComponent/facebook-card";
import FacebookViews from "./Components/FacebookComponent/facebook-views";
import FacebookLikes from "./Components/FacebookComponent/facebook-likes";
import TwitterCard from "./Components/TwitterComponent/twitter-card";
import TwitterLikes from "./Components/TwitterComponent/twitter-likes";
import TwitterRTs from "./Components/TwitterComponent/twitter-retweets";
import IG_Card from "./Components/IGComponent/ig-card";
import IGViews from "./Components/IGComponent/ig-views";
import IG_Likes from "./Components/IGComponent/ig-likes";
import YT_Card from "./Components/YTComponent/yt-card";
import YT_Likes from "./Components/YTComponent/yt-likes";
import YT_Views from "./Components/YTComponent/yt-views";


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='Father'>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className='Mother'>
          <div className='Gaurdian'>
            {/* components */}
            < DashboardTitle />
            {/* Dark mode/ light mode button! */}
            <button id='lightsBtn' onClick={toggleMode}>Toggle Mode</button>
          </div>
            <div className='Top-row'>
              < FacebookCard />
              < TwitterCard />
              < IG_Card />
              < YT_Card />
            </div>
              <h1 className='hero-text'>Overview - Today</h1>
            <div className="Bottom-row">
            < FacebookViews />
            < FacebookLikes />
            < IG_Likes />
            < IGViews />
            </div>
            <div className="Bottom-row">
            < TwitterRTs />
            < TwitterLikes />
            < YT_Likes />
            < YT_Views />
            </div>
        </div>
      </div>
    </div>
  );
}