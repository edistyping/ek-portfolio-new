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
            "Oakwood is a company that provides service in corporate housing across global regions including Europe, Asia, and Americas",
            "As a Business System Analyst, my responsibilites are to work with various departments or personnel for requirement gatherings, design, and development of reports as well as testing and documentation. ",
        ],
        skills: [
            "SQL",
            "ETL",
            "BusinessIntellignece/BusinessObjects",
            "VBA/Macro",
            "Data Analysis / Dashboard Creation / FTP Automation",            
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
            "hi1sdafjlkdsafjlskdafjlskdafjldsaifjosajfpdsaijfpsdafjpsdajfpsdjfpsdfjpdsfjpsdjfpsdjf dsfjpsdjfs pdsjf dsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjf789",
        ],
        skills: [
            "SQL/SQL Server",
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
            "GS Love was a retail company with over 30-plus stores across Southern California focusing on clothings, accessories, and other merchandise for women",
            "My primary responsibilities are preparing daily and weekly reports by extracting data directly from SQL Developer with Microsoft Office.",
            "blah blah blah"
        ],
        skills: [
            "Python", 
            "SQL/SQL Developer",
            "Microsoft Office",
            "VBA/Macro",
            "Forecasting/Analysis",      
        ],
    };
    
    const jobList = [job0, job1, job2];

    return (
        <div style={{height: "100%", borderStyle: "solid", borderColor: "yellow"}}>

                        
                        {jobList.map((i) =>
                            <div className="main-experience">
                                <div className="experience-left"> 
                                    <div>
                                        <img className="jobicon" src={"./images/job_icon.png"} alt="Logo" />
                                    </div>
                                    <div className="experience-left-bottom">

                                    </div>
                                </div>

                                <div className="experience-right">
                                    <p style={{ fontWeight: "bold", fontSize: "2em", padding: "0", margin: "0"}}>{i.employer}</p>
                                    <p style={{ fontSize: "1.5em", padding: "0", margin: "0"}}>{i.title} | {i.start_date} - {i.end_date}</p>
                                    
                                    <div style={{ backgroundColor: "DarkSlateGrey", }}>
                                      <p>{i.description}</p>
                                    </div>
                                </div>
                            </div>

                        )}
                    


        </div>
    )
}
export default Experience;