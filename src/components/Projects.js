import React from 'react';

import '../css/Projects.css'

const Projects = () => (    
    <div style={{width:"100%", height: "100%",backgroundColor:"yellow", }}>
        <h1 style={{textAlign: "center"}}>Projects</h1> 
        <h2 style={{textAlign: "center"}}>Below shows different applications I've developed either by myself or my fellows to design and implement an idea brainstormed. </h2>
            
        <div className="projects-container"> 
            <div className="projects-element">
                <h2>Plan One</h2>
                <p>Spring 2017</p>
                <p>Mobile App | Android | Java</p>
            </div>
            <div className="projects-element">
                <h2>InvenStory</h2>
                <p>Spring 2016</p>
                <p>Mobile App | Android | Java</p>
            </div>
            <div className="projects-element">
                <h2>Project Protect</h2>
                <p>Fall 2015</p>
                <p>Engineering Service team in UC Merced</p>
            </div>
            
            <div className="projects-element">
                <h2>Flying Pigeon</h2>
                <p>Spring 2017</p>
                <p>Window App | Simple 2-D Game | OpenGL++</p>
            </div>
        </div> 

    </div>
)

export default Projects;