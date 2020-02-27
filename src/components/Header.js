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
      Los Angeles, CA - {counter}
    </div>
  )
}

const Header = () => (    
    <div className="Header">
        <TimeDisplay/>
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
    </div>
)

export default Header;