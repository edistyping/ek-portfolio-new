import React, { useState, useEffect, useRef } from 'react';

import ImageSlide from './ImageSlide';
import '../css/Projects.css'

const Popup = (props) => {
    
    var proj_planone = {
        id: 1,
        projName: "Plan One",
        period: "Spring 2017",
        platform: "Android",
        purpose: "Plan One is a mobile app for Android that's focused on promoting and imporiving outdoor safty experience by saving a user's traveling route while conserving battery. ",
        motive: [
            "Despite increasing numbers of people with access to a smartphone, an extensive research showed still numbers of unfortunate incidents from outdoor activity hadn't been much affected.",
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
        purpose: "InventStory is intended and designed to provide supports to Start-up buisnesses to efficiently utilize their managment, inventory, and communication.",
        motive: [
            "For my 1st participation to Mobile App Challenge (MAC), I worked with 2 engineers from UCM to design this applicatino. ",
            "With my previous experience working from TJ Maxx and a resturant, the team collaborated to design this application in hopes that each of ourselves can use it in the future!",
        ],
        tools: [
            "Java",
            "Android",
            "Project Management",
            "Agile",
            "MS Office",
        ],
        github: "https://github.com/goosfraba814/Invent_Story_MAC_S2016-First-Draft-",
        futuregoal: "Planning on re-coding this Mobile App from scratch in Kotlin!",
        screenshots: ["/images/invent1.jpg",
                    "/images/invent2.jpg",
                    "/images/invent3.jpg",
                    "/images/invent4.jpg"],
    };
    var proj_flying = {
        id: 3,
        projName: "Flying Ninja",
        period: "Spring 2017",
        purpose: "This is a 2-D game I created for one of my university course in C++. As a popular game 'FlappyBird' disppeared from Google Store, I decided to re-create it to cherish the memory",
        motive: [
            "I and another programmer from my course worked on the class together. This is also the first time I collaborated after learning the very concept of 'pair-programming",
            "",
        ],
        tools: [
            "Window Application",
            "OpenGL",
            "Project Management",
            "2-D Game",
            "Pair Programming",
        ],
        github: "https://github.com/goosfraba814/Flying-Ninja",
        futuregoal: "Re-creating this game as Web app instead and accessable via here (portfolio)",
        screenshots: ["/images/loopy_start.jpg",
                     "/images/loopy_end.jpg", 
        ]
    };

    var proj_projectprotect = {
        id: 4,
        projName: "Project Protect",
        period: "Fall 2015",
        purpose: ["Project Protect is an engineering service team in UC Merced that worked with our partner Healthy House to provde various medical services to people in needs around Merced County.",
            "As a team, we designed a mobile app that provide health-related infos and communication supports between patient and doctors to ultimately reduce anti-bacterial resistance disease.",
        ],
        motive: [
            "After having a chacne to directly speak to medical professionals and patients, we understood that there's a significant gap in communication leading to more fatal consquences.",
            "It's also my first engineering team I've worked with since transferring from a community college.",
        ],
        tools: [
            "Java",
            "Android",
            "Project Management",
        ],
        github: "",
        futuregoal: "None at this-time",
        screenshots: [],
    };

    const projList = [proj_planone, proj_inventstory, proj_flying, proj_projectprotect];
    const selected = props.show - 1;

    return (

        //Honetsly i think we can remvoe project-header stuff and only provide data/info
        <div style={{padding: "0 1vh", display: "flex", flexDirection:"column", backgroundColor: "white", "font-family": "'Indie Flower', cursive" }}>
            <div className="test" style={{}}><p style={{display: "inline", fontSize: "2em"}}>{projList[selected].projName} </p> <p style={{display: "inline", fontSize: "1.2em"}}> {projList[selected].period} |   [git_icon] </p> </div>
            
            <div className="test" style={{display: "flex", justifyContent: "center", }}>
                {projList[selected].tools.map((i) => 
                    <p style={{display: "inline", margin: "0 3vh 0 0"}}>{i}</p> )}
             </div>
                        
            <div className="test"><p className="project-header">Description </p><p style={{display: "inline"}}>{projList[selected].purpose} </p> </div>
            <div className="test"><p className="project-header">Motive </p><p style={{display: "inline", }}>{projList[selected].motive}</p></div>
            <div className="test" style={{ }}>
                {projList[selected].screenshots.length === 0 ? null : 
                    <div>
                        <p className="project-header">Screenshots </p>
                        <ImageSlide value={projList[selected].screenshots} /> 
                    </div>
                }                     
            </div>
            <div className="test" style={{marginBottom: "1vh", }}>
                {projList[selected].github === "" ? null :     
                    <div>
                        <p className="project-header">Github </p> 
                        <a href={projList[selected].github} ><p style={{display:"inline", fontSize: "1.3em", }}>Click Here!</p></a> 
                    </div>
                }
            </div>
            
            <div className="test" > 
                <p className="project-header">Future Plan </p> 
                <p style={{margin: 0}}>{projList[selected].futuregoal} </p> 
            </div>

        </div>     
         
    );
};

const Projects = () => {

    const [show, setShow] = useState(4);

    var popupClass = "diplay-none";
    if (show !== 0){
        popupClass = "project-popup";
    }    

    return (    
        <div style={{width:"100%", minHeight: "90vh", height: "fit-content",backgroundColor:"lightblue", margin: 0, padding: 0, overflow: "auto" }}>
            
            <div className={popupClass} >
                <div style={{display: "flex", flexDirection: "column", margin: "0" }}>                
                    {show === 0 ? null : 
                        <Popup show={show}/> }
                        <div style={{margin: "0 auto 3% auto", }}><button style={{fontWeight: "bold", fontSize: "1.2em"}} onClick={() => setShow(0)} > Close </button></div>
                </div>
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