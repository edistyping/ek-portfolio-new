import React, { useState } from 'react';


import '../css/Home.css'


const RightSide = () => { 
    const [index, setIndex] = useState(0);

    var introduction = {
        id: 0,
        Questions: [
            "Cats or Dogs?",
            "hi1sdafjlkdsafjlskdafjlskdafjldsaifjosajfpdsaijfpsdafjpsdajfpsdjfpsdfjpdsfjpsdjfpsdjf dsfjpsdjfs pdsjf dsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjf789",
        ],
        Introduction: [
            "I am a...."
        ],
    };
    var interets = {
        id: 1,
        Questions: [
            "Cats or Dogs?",
            "hi1sdafjlkdsafjlskdafjlskdafjldsaifjosajfpdsaijfpsdafjpsdajfpsdjfpsdfjpdsfjpsdjfpsdjf dsfjpsdjfs pdsjf dsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjfdsfjpsdjfs pdsjf789",
        ],
        Answers: [
            "It would be dog",
            "Yes, dafiasfsf",
        ],
    };
    
    const RightHeader = [introduction, interets];

    return (
        <div style={{height: "100%", display: "flex", "flex-direction": "column",}}>
            <div className="right-header-component">
                <p onClick={() => setIndex(0)} className={index === 0 ? '' : 'notSelected'} > haa </p>  
                <p onClick={() => setIndex(1)} className={index === 1 ? '' : 'notSelected'}> hee </p>  
            </div>

            <div className="right-body-component">
                body <br/>
                <p>
                {RightHeader[index].Questions.map((i) =>
                            i 
                )}
                </p>

                <div className="right-skills"> 
                    Skills here:
                </div>
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