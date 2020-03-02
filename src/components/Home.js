import React, { useState } from 'react';


import '../css/Home.css'

const Intro = () => {
        var Skills = [
            "SQL/NoSQL",
            "VBA/Macro",
            "C++",
            "Java",
            "Javascript (React)",
            "OOP/Waterfall/Agile"]

    return (
        <div style={{padding: "3% 0 0 0"}}>
                <p className="right-intro-p">I'm <span style={{color: "white", fontWeight: "bold"}}>Edward</span> and graduated from UC Merced in <span style={{color: "white", fontWeight: "bold"}}>Computer Science and Engineering</span>.</p>
                <p className="right-intro-p">My <span style={{color: "white", fontWeight: "bold"}}>Goal</span> is to earn a full-time position as a web designer and developer using modern tools such as ReactJS.</p>
                <p className="right-intro-p">Currently living in <span style={{color: "white", fontWeight: "bold"}}>Los Angeles</span>, I am a Business System Anaylst and continue to search and develop new skills and interests.</p>
              
                <div className="right-skills"> 
                    <p style={{margin: "0 0 0 5%", borderStyle: "none none solid none", textAlign: "center",fontSize: "2em", padding: 0, }}>Skills</p>
                    <p style={{marginLeft: "5%", fontSize: "1.2em"}}>Below are skills I've accumulated from university courses as well as online and from my professional positions.</p>
                    {Skills.map((i) =>
                        <li>{i}</li>            
                    )}
                </div>
        </div>
    )
}

const Interest = () => {
    var QandA = { 
            Questions: [
                "Cats or Dogs?",
                "What is your favorite albums or playlist?",
                "What are your top 3 music?"
            ],
            Answers: [   
                "Dogs but dog-like cat is also acceptable",
                "Jazz or random mix",
            ],
    };

    return (
        <div style={{padding: "3% 0 0 5%"}}> 
            hm: {QandA.Questions[1]}           
            {QandA.Questions.map((i) => 
               <p>Questions: {i} </p>
            )}
            
            {QandA.Answers.map((i) => 
               <p> {i} </p>
            )}

        </div>

    )
}

const RightSide = () => { 
    const [index, setIndex] = useState(0);

    return (
        <div style={{height: "100%", display: "flex", "flex-direction": "column",}}>
            <div className="right-header-component">
                <p onClick={() => setIndex(0)} className={index === 0 ? 'selected' : 'notSelected'} > Introduction </p>  
                <p onClick={() => setIndex(1)} className={index === 1 ? 'selected' : 'notSelected'}> Q and A </p>  
            </div>

            
            <div className="right-body-component">
                {index === 0 ? 
                    (<Intro/>) 
                    :
                    (<Interest/>) 
                }
            </div>


        </div>
    )
}


const Home = () => (    
    <div style={{borderColor: "silver", height: "100%"}}>
        <div className="main">
            <div className="left">
                <p>Hello World from Aquarium!</p>
                <img src="/images/EK_Aquarium.jpg" alt="This is my face" />           
            </div>

            <div className="right">
                <RightSide/>
            </div>
        </div>
    </div>
)

export default Home;