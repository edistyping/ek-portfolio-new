import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function TimeDisplay(){
  const [counter, setCounter] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      // Below is for formatting the provided Datetime
      var temp = new Date().toLocaleString();
      temp = temp.replace(",", "");
      temp = temp.substring(0, temp.length-6) + temp.substring(temp.length-3);
      setCounter(counter => temp);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="time-style">
      Los Angeles, CA - {counter}
    </div>
  )
}

function SocialNetworks(){
  return(
          <div className="social-style">
                <a href='https://github.com/Goosefraba814/ek-portfolio'><img style={{width: "5vh", height: "5vh", "padding-left": "2vh" }} src='https://img.icons8.com/bubbles/2x/github.png' alt="Github Icon"/></a>
                <a href='https://www.linkedin.com/in/edward-kim-a77608106/'><img style={{width: "5vh", height: "5vh", "padding-left": "2vh" }} src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png' alt="Linkedin Icon"/></a>
                <a href='/images/Resume_Edward_Kim.pdf' download><img style={{width: "5vh", height: "5vh", "padding-left": "2vh"}} src='../images/Resume_Icon.png' alt="Resume Download Icon"/></a>
          </div>
  )
}
const Header = () => (    
    <div className="Header">
        <TimeDisplay/>
        
        <div className="link-style">
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div> 
        <SocialNetworks/>
    </div>
)

export default Header;