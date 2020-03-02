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
        <div>
                <p className="right-intro-p">I'm Edward and graduated from UC Merced in Computer Science and Engineering.</p>
                <p className="right-intro-p">My Goal is to earn a full-time position as a web designer and developer using modern tools such as ReactJS.</p>
                <p className="right-intro-p">I currently live in Los Angeles working as a Business System Anaylst and continue to search and develop new skills and interests.</p>
              
                <div className="right-skills"> 
                    <p style={{textAlign: "center",fontSize: "2.2em", padding: 0, margin: "3% 0 0 0%"}}>Skills</p>
                    <p style={{marginLeft: "3%"}}>Below are skills I've accumulated from university courses as well as online and from my professional positions.</p>
                    {Skills.map((i) =>
                        <p style={{"text-align": "center"}}>{i}</p>            
                    )}
                </div>
        </div>
    )
}

const Interest = () => {
    var QandA = { 
            Questions: [
                "Cats or Dogs?",
                "What is your favorite albums or playlist?"],
            Answers: [   
                "Dogs but dog-like cat is also acceptable",
                "Jazz or random mix",
            ],
    };

    return (
        <div>
            <p> INterestse heree </p>
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