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
                <p>My Name is Edward and I'm a graduate from UC Merced in Computer Science and Engineering</p>
                <p>My Goal is to earn a full-time position as a web designer and developer using modern tools such as ReactJS.</p>
                <p>I currently live in Los Angeles working as a Business System Anaylst and continue to search and develop new skills and interests.</p>
              
                <div className="right-skills"> 
                    Skills here:
                    {Skills.map((i) =>
                        <p>{i}</p>            
                    )}
                </div>
        </div>
    )
}

const Interest = () => {
    var QandA = ["Cats or Dogs?",
            "Dogs but dog-like cat is also acceptable",
            "What is your favorite albums or playlist?",
            "Jazz or random mix"];

    return (
        <div>
            {QandA.map((i) =>
                <p>{i}</p>            
            )}
        </div>

    )
}

const RightSide = () => { 
    const [index, setIndex] = useState(0);

    return (
        <div style={{height: "100%", display: "flex", "flex-direction": "column",}}>
            <div className="right-header-component">
                <p onClick={() => setIndex(0)} className={index === 0 ? '' : 'notSelected'} > Introduction </p>  
                <p onClick={() => setIndex(1)} className={index === 1 ? '' : 'notSelected'}> Q and A </p>  
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
    <div style={{borderStyle:"solid", borderColor: "silver", height: "100%"}}>
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