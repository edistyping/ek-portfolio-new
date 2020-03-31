import React from 'react';

import '../css/Projects.css'

const Projects = () => (    
    <div style={{height: "100%",borderStyle:"solid", color: "yellow"}}>
        <h2>Projects</h2> 
        Test: Gird 2 columns and n rows showing Projects - Each button will open a pop-up display to explain details 
            
        <div className="projects-container"> 
            <div className="projects-element">A</div>
            <div className="projects-element">B</div>
            <div className="projects-element">C</div>
            <div className="projects-element">D</div>
        </div> 

    </div>
)

export default Projects;