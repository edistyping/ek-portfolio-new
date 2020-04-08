import React, { useState } from 'react';

import '../css/Projects.css'

const Popup = (props) => {

    // https://alligator.io/react/modal-component/
    return (
        <div>
                <h3>Hello Everyone --- </h3>
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
                    <p>Window App | Simple 2-D Game | OpenGL++</p>
                </div>
            </div> 

            <h2 style={{textAlign: "center"}}>Below shows different applications I've developed either by myself or my fellows to design and implement an idea brainstormed. </h2>
            <h3 style={{textAlign: "center"}}> Click to see more Details! </h3>  
        </div>

    )
}

export default Projects;