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
                "Q. Which one are you more appeal to, Cats or Doggos?",
                "Q. What is your favorite albums or playlist?",
                "Q. What are TV shows or movies you enjoyed recently?",
                "Q. If you can start a sports team, what would you choose as a theme color?",
                "Q. Do you have any celebrities you admire?",
            ],
            Answers: [   
                "Dogs but dog-like cat is also acceptable",
                "Jazz or random mix",
                "Great question",
                "Red, White, Yellow",
                "Norm MacDonald, Bill Burr, and Dave Chappelle"
            ],
    };

    return (
        <div className="right-interests"> 
            <p>{QandA.Questions[0]}</p>
            <p style={{paddingLeft: "5%"}}>{QandA.Answers[0]}</p>

            <p>{QandA.Questions[1]}</p>
            <p style={{paddingLeft: "5%"}}>{QandA.Answers[1]}</p>
            
            <p>{QandA.Questions[2]}</p>
            <p style={{paddingLeft: "5%"}}>{QandA.Answers[2]}</p>

            <p>{QandA.Questions[3]}</p>
            <p style={{paddingLeft: "5%"}}>{QandA.Answers[3]}</p>

            <p>{QandA.Questions[4]}</p>
            <p style={{paddingLeft: "5%"}}>{QandA.Answers[4]}</p>
        </div>
    )
}

const RightSide = () => { 
    const [index, setIndex] = useState(0);

    return (
        <div style={{height: "100%", display: "flex", "flex-direction": "column",}}>
            <div className="right-header-component">
                <p onClick={() => setIndex(0)} className={index === 0 ? 'selected' : 'notSelected'} > Introduction </p>  
                <p onClick={() => setIndex(1)} className={index === 1 ? 'selected' : 'notSelected'}> Hobbies & Interests </p>  
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
    <div style={{borderColor: "silver", height: "100%", }}>
        <div className="main">
            <div className="left">
                <p>Hello World from Aquarium!</p>
                <img src="/images/EK_Aquarium.jpg" alt="This is my face" />           
            </div>

            <div className="right">
                <RightSide/>
            </div>
        </div>

        <div style={{width: "100%", backgroundColor: "yellowgreen", }}>
            <h1 style={{textAlign: "center"}}>This will be Instagram Section</h1>

            <div style={{display: "flex", justifyContent: "space-evenly", }}>                
                <img src="" style={{width: "100px", height: "100px", }} alt="here1" />
                <img src="" style={{width: "100px", height: "100px", }} alt="here2" />
                <img src="" style={{width: "100px", height: "100px", }} alt="here3" />
            </div>
        </div>
    </div>
)

export default Home;