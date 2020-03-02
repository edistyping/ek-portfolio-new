import React from 'react';

import '../App.css';

const Footer = () => {
    
    // after one second, change from height: 0%; 
    
    return ( 
            <div className="Footer">
                <img style={{width: "5vh", height: "100%", }} src='../images/logo_raiders.png' alt="Github Icon"/>
                <img style={{width: "5vh", height: "100%",  }} src='../images/logo_as.png' alt="A's"/>
                <img style={{width: "5vh", height: "100%", }} src='../images/logo_warriors.png' alt="Github Icon"/>
            </div>

    )
}

export default Footer;