import React, { useState } from 'react';

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
            "Java",
            "Android",
            "Project Management",
        ],
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
    };

    const projList = [proj_planone, proj_inventstory, proj_flying, proj_projectprotect];
    const selected = props.show - 1;

    console.log("Wtf" + proj_planone.projName);
    console.log("Wtf" + projList[0].projName);
    // Now import Projects information and select using 'props.show' value
    // Platforms, language, description, purpose, target, iamges, github/code, 

    return (
        <div >
                <h3>Hello Everyone {selected} </h3>

                <p>Project Name: {projList[selected].projName} </p>
                <p>Timeline: {projList[selected].period} </p>
                <p>Platforms: {projList[selected].platform} </p>
                <p>Language: {projList[selected].tools}</p>
                <p>Purpose/Description: {projList[selected].purpose} </p>
                <p>Motive: {projList[selected].motive}</p>
        
                <p>(Some images here for sample...)</p>
                <p>(Github Codes if exists)</p>
                <p>Any Future plan?</p>
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
        <div style={{width:"100%", height: "auto",backgroundColor:"yellow", }}>
            
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