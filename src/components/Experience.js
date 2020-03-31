import React from 'react';

import '../css/Experience.css'

const Experience = () => {    
    
    var job0 = {
        id: 0,
        employer: "Oakwood",
        title: "Business System Analyst",
        start_date: "Sep 2018",
        end_date: "Sep 2019",
        description: [
            "As a Business System Analyst, my responsibilites are to work with various departments or personnel for requirement gatherings, design, and development of reports as well as testing and documentation. ",
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
            "CGI is a....",
            "pdsjf789",
        ],
        skills: [
            "SQL Server",
            "VBA",
            "Programming",       
            "Shell Scripting",     
        ],
    };
    var job2 = {
        id: 2,
        employer: "GS Love",
        title: "Store Analyst",
        start_date: "Oct 2017",
        end_date: "Jan 2018",
        description: [
            "As a Store Analyst for the retail headquarter, my responsibilities are preparing daily and weekly reports by extracting data directly from SQL Developer with Microsoft Office."
        ],
        skills: [
            "Python", 
            "SQL Developer",
            "Microsoft Office",
            "VBA/Macro",
            "Forecasting/Analysis",      
        ],
    };
    
    const jobList = [job0, job1, job2];

    return (
        <div style={{height: "auto", backgroundColor: "#202020", }}>
                        {jobList.map((i) =>
                            <div className="main-experience">
                                <div className="experience-left"> 
                                    <div>
                                        <img className="jobicon" src={"./images/job_icon.png"} alt="Logo" />
                                    </div>
                                    <div className="experience-left-bottom">

                                    </div>
    
                                    <hr className="test"/>

                                </div>

                                <div className="experience-right">
                                    <h1 style={{padding: "0", margin:"0"}}>{i.employer}</h1>
                                    <p style={{ fontSize: "1.5em", padding: "0", margin: "0"}}>{i.title} | {i.start_date} - {i.end_date}</p>
                                    


                                    <div style={{display:"flex", flexDirection: "column", padding: "0.1vh 0 0 0", margin: "1vh 0 0 0", }}>

                                        <div className="experience-right-bottom">
                                            <p>{i.description}</p>
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
    )
}
export default Experience;