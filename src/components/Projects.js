import React, { useState } from 'react';

import ImageSlide from './ImageSlide';
import '../css/Projects.css'

const Popup = (props) => {
    
    var proj_planone = {
        id: 1,
        projName: "Plan One",
        period: "Spring 2017",
        platform: "Android",
        purpose: "The purpose/functionality of Plan One is to provide safety",
        motive: [
            "Increasing access to phone, yet same amount of people getting lost and other possibly avoidable troubles.",
        ],
        tools: [
            "Java",
            "Android",
            "Project Management",
        ],
        github: "",
        futuregoal: "Planning on re-coding this Mobile App from scratch in Kotlin!",
        screenshots: ["/images/planone/1.png",
                    "/images/planone/2.png",
                    "/images/planone/3.png",
                    "/images/planone/4.png"],
    };

    var proj_inventstory = {
        id: 2,
        projName: "InventStory",
        period: "Spring 2016",
        platform: "Android",
        purpose: "The purpose/functionality of InventStory is to provide a hand to start-up business",
        motive: [
            "My experience from TJ Maxx and KBBQ came in handy for designing",
        ],
        tools: [
            "Java",
            "Android",
            "Project Management",
        ],
        github: "",
        futuregoal: "Planning on re-coding this Mobile App from scratch in Kotlin!",
        screenshots: ["/images/invent1.jpg",
                    "/images/invent2.jpg",
                    "/images/invent3.jpg",
                    "/images/invent4.jpg"],
    };
    var proj_flying = {
        id: 3,
        projName: "Flying Pigeno (Rename)",
        period: "Spring 2017",
        platform: "Windows Application",
        purpose: "This is a game created",
        motive: [
            "My experience from ",
        ],
        tools: [
            "Window Application",
            "OpenGL",
            "Project Management",
            "2-D Game",
        ],
        github: "https://github.com/goosfraba814/Flying-Ninja",
        futuregoal: "Re-creating this game as Web app instead and accessable via here (portfolio)",
        screenshots: ["/images/loopy_end.jpg",
                     "/images/loopy_start.jpg", 
        ]
    };

    var proj_projectprotect = {
        id: 4,
        projName: "Project Protect",
        period: "Fall 2015",
        platform: "Andoird",
        purpose: "An App created to provide medical information and communication between patient and doctors in Merced Community",
        motive: [
            "My experience from TJ Maxx and KBBQ came in handy for designing",
        ],
        tools: [
            "Java",
            "Android",
            "Project Management",
        ],
        github: "",
        futuregoal: "None",
        screenshots: [],
    };

    const projList = [proj_planone, proj_inventstory, proj_flying, proj_projectprotect];
    const selected = props.show - 1;

    const testt = "/static/media/loopy_end.f87d5268.jpg";
    const testt2 = "/static/media/loopy_start.4022d2be.jpg";


    return (
        //Honetsly i think we can remvoe project-header stuff and only provide data/info
        <div style={{display: "flex", flexDirection:"column"}}>
            <div className="test"><p className="project-header">Project Name </p><p style={{display: "inline", fontSize: "1em"}}>{projList[selected].projName} </p> </div>
            <div className="test"><p className="project-header">Timeline </p><p style={{display: "inline"}}>{projList[selected].period} </p></div>
            <div className="test"><p className="project-header">Platforms </p><p style={{display: "inline"}}> {projList[selected].platform} </p></div>
            <div className="test"><p className="project-header">Language </p><p style={{display: "inline"}}>{projList[selected].tools.map((i) => i + " ") } </p> </div>
            <div className="test"><p className="project-header">Purpose/Description </p><p style={{display: "inline"}}>{projList[selected].purpose} </p> </div>
            <div className="test"><p className="project-header">Motive </p><p style={{display: "inline"}}>{projList[selected].motive}</p></div>

            
            <div className="test">
                <p className="project-header">Screenshots </p> 
                {projList[selected].screenshots.length == 0 ? null : <ImageSlide value={projList[selected].screenshots} /> }
               
            </div>
            <div className="test"><p className="project-header">Github </p> {projList[selected].github} </div>
            <div className="test"> 
                <p className="project-header">Future Plan: </p> 
                <p style={{margin: 0}}>{projList[selected].futuregoal} </p> 
            </div>
        </div>      
    );
};

const Projects = () => {

    const [show, setShow] = useState(3);

    var popupClass = "diplay-none";
    if (show !== 0){
        popupClass = "project-popup";
    }    

    return (    
        <div style={{width:"100%", height: "80vh",backgroundColor:"grey", display:"flex", }}>
            
            <div className={popupClass} >
                {show === 0 ? null : <Popup show={show}/> }
                <button onClick={() => setShow(0)} >Hi Button </button>
            </div>

            <div className="projects-container"> 
                <div className="projects-element" onClick={() => setShow(1)} >
                    <h2>Plan One</h2>
                    <p>Spring 2017</p>
                    <p>Mobile App | Android | Java</p>
                </div>
                <div className="projects-element" onClick={() => setShow(2)} >
                    <h2>InvenStory</h2>
                    <p>Spring 2016</p>
                    <p>Mobile App | Android | Java</p>
                </div>
                <div className="projects-element" onClick={() => setShow(3)}>
                    <h2>Flying Pigeon</h2>
                    <p>Spring 2017</p>
                    <p>(Build one using ReactJS and host it; future)</p>
                    <p>Window App | Simple 2-D Game | OpenGL++</p>
                </div>
                <div className="projects-element" onClick={() => setShow(4)}>
                    <h2>Project Protect</h2>
                    <p>Fall 2015</p>
                    <p>Engineering Service team in UC Merced</p>
                </div>                
            </div> 

        </div>

    )
}

export default Projects;