import React, { useState } from 'react';

import '../css/Projects.css'

const Popup = (props) => {
    
    // Now import Projects information and select using 'props.show' value
    // Platforms, language, description, purpose, target, iamges, github/code, 

    return (
        <div>
                <h3>Hello Everyone s--- </h3>
                <p>Platforms: </p>
                <p>Language: </p>
                <p>Purpose/Description: </p>
                <p>Images (slideshow)</p>
                    - build a game and put on here (flappybird)
                <p>It's amazing I'm the reason Everybody fired up this evening I'm exhausted Barely breathing Holding on to what I believe in No matter what You'll never take that from me  My reign is as far as your eyes can see It's amazin', so amazin', so amazin', so amazin', it's amazin' So amazin', so amazin', so amazin', it's amazin' (Let's go)</p>
        </div>      
    );
};

const Projects = () => {

    const [show, setShow] = useState(0);

    var popupClass = "diplay-none";
    if (show != 0){
        popupClass = "project-popup";
    }    

    return (    
        <div style={{width:"100%", height: "100%",backgroundColor:"yellow", }}>
    
            <div className={popupClass} >
                <Popup show={show}/>
                <button onClick={() => setShow(0)} >Hi Button </button>
            </div>

            <div className="projects-container"> 
                <div className="projects-element" onClick={() => setShow(1)} >
                    <h2>Plan One</h2>
                    <p>Spring 2017</p>
                    <p>Mobile App | Android | Java</p>
                </div>
                <div className="projects-element" onClick={() => setShow(1)} >
                    <h2>InvenStory</h2>
                    <p>Spring 2016</p>
                    <p>Mobile App | Android | Java</p>
                </div>
                <div className="projects-element" onClick={() => setShow(1)}>
                    <h2>Project Protect</h2>
                    <p>Fall 2015</p>
                    <p>Engineering Service team in UC Merced</p>
                </div>
                
                <div className="projects-element" onClick={() => setShow(1)}>
                    <h2>Flying Pigeon</h2>
                    <p>Spring 2017</p>
                    <p>(Build one using ReactJS and host it; future)</p>
                    <p>Window App | Simple 2-D Game | OpenGL++</p>
                </div>
            </div> 

        </div>

    )
}

export default Projects;