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
    <div>
      <p className="time-style">Los Angeles, CA - {counter}</p>
    </div>
  )
}

function SocialNetworks(){
  return(
          <div className="social-style">
                <a href='https://github.com/Goosefraba814/ek-portfolio'><img src='https://img.icons8.com/bubbles/2x/github.png' alt="Github Icon"/></a>
                <a href='https://www.linkedin.com/in/edward-kim-a77608106/'><img src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png' alt="Linkedin Icon"/></a>
                <a href='/images/Resume_Edward_Kim.pdf' download><img src='../images/Resume_Icon.png' alt="Resume Download Icon"/></a>
          </div>
  )
}
const Header = () => {

    const [index, setIndex] = useState(0);

    return (
    <div className="Header">
        <TimeDisplay/>
        <div className="link-container">
            <Link to="/" onClick={() => setIndex(0)} className={index === 0 ? 'link-style' : 'link-style-inactive'}>Home</Link>
            <Link to="/experience" onClick={() => setIndex(1)} className={index === 1 ? 'link-style' : 'link-style-inactive'} >Experience</Link>
            <Link to="/projects" onClick={() => setIndex(2)} className={index === 2 ? 'link-style' : 'link-style-inactive'}>Projects</Link>
            <Link to="/contact" onClick={() => setIndex(3)} className={index === 3 ? 'link-style' : 'link-style-inactive'}>Contact</Link>
        </div>
        <SocialNetworks/>
    </div>
  )
}
export default Header;