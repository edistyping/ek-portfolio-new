import React from 'react';

import '../css/Experience.css'
import JobIcon from '../images/job_icon.png';

const Experience = () => {    
    
    var job0 = {
        id: 0,
        employer: "Oakwood",
        title: "Business System Analyst",
        start_date: "Sep 2018",
        end_date: "Sep 2019",
        description: [
            "My main responsibility is to communicate with members to gather requirements to design and create reports as well as working with ETL team to ensure the accuracy of data or troubleshoot any issues with data or reports.",
            "Additionally, using source applications, SQLServers, and BO reports, I provided assistance to users for any technical or business concerns.",
        ],
        skills: [
            "SQL",
            "ETL",
            "BusinessObjects",
            "VBA/Macro",
            "Data Analysis",
            "Dashboard Creation",            
        ],
    };
    var job1 = {
        id: 1,
        employer: "C.G.I.",
        title: "Auxiliary Support",
        start_date: "Jan 2018",
        end_date: "July 2018",
        description: [
            "Worked at one of Los Angeles County offices to analyze or develop reports requirements, ETL, and data mining using SQL Developer",            
            "Secondary responsilbities include unit-testing or troubleshooting any issues in regards to  automations or report developments.",
        ],
        skills: [
            "SQL Developer",
            "Microsoft Office",
            "VBA/Macro",
            "Programming",       
            "Shell Scripting/Unit Testing/Documentation",     
        ],
    };
    var job2 = {
        id: 2,
        employer: "GS Love",
        title: "Store Analyst",
        start_date: "Oct 2017",
        end_date: "Jan 2018",
        description: [
            "My first job after graduating from university!",
            "As a Store Analyst at the headquarter of a retail company with 30-plus stores across Los Angeles", 
            "I provided daily and weekly analtical reports, and using these reports supplemented with any additional data and sales team to transfer inventories across stores to increase sales and profits.",
        ],
        skills: [
            "Python",
            "R", 
            "SQL Developer",
            "Microsoft Office",
            "VBA/Macro",
            "Forecasting/Analysis",      
        ],
    };
    
    const jobList = [job0, job1, job2];

    return (
        <div style={{width: "100%", height: "fit-content", backgroundColor: "#202020", }}>

                <div style={{width: "55%", margin: "0 auto 3% auto",  }}>
                        {jobList.map((i) =>
                            <div className="main-experience">
                                <div className="experience-left"> 
                                    <div>
                                        <img className="jobicon" src={JobIcon} alt="Logo" />
                                    </div>

                                    <div style={{display: "flex", width: "100%", height: "100%"}}>
                                        <div style={{"border-right": "2px solid white", height: "auto", width: "100%"}} />
                                        <div style={{"border-bottom": "2px solid white", height: "auto", width: "100%"}} /> 
                                    </div>

                                    {/*<div className="experience-left-bottom" /> */}
                                    {/*<hr className="test"/>*/}

                                </div>

                                <div className="experience-right">
                                        <h1 style={{padding: "0", margin:"0"}}>{i.employer}</h1>
                                        <p style={{ fontSize: "1.5em", padding: "0", margin: "0"}}>{i.title} | {i.start_date} - {i.end_date}</p>
                                        


                                        <div style={{display:"flex", flexDirection: "column", padding: "0.1vh 0 0 0", margin: "1vh 0 0 0", }}>

                                            <div className="experience-right-bottom">
                                                {i.description.map((j) =>
                                                <p>{j}</p>
                                                
                                                )}
                                            </div>

                                            <h2 style={{margin: "1vh 0" }}>Skills</h2>
                                            <div style={{display:"flex", justifyContent: "space-evenly", }}>
                                                {i.skills.map((j) => 
                                                    <div className="experience-right-bottom" >
                                                        <p>{j}</p>
                                                    </div> 
                                                )}
                                            </div>  
                                        </div>
                                </div>
                            </div>

                        )}
                    
            </div>

        </div>
    )
}
export default Experience;