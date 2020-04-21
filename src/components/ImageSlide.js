import React, { useState } from 'react';
import Image0 from '../assets/losangeles_body.png';
import Image1 from '../assets/losangeles_sketch.jpg';
import Image3 from '../assets/losangeles.jpg';
import Image4 from '../assets/losangeles2.jpg';



const RightSide = () => {

    // Display, 2 Buttons (left and right)
    // image will move left to right
    const imgArr = [Image0, Image1, Image3, Image4];
    const [index, setIndex]  = useState(0);

    function ControlLimit(index, max, val){
        //alert("val: " + val);
        if (index <= 0 && val == -1){
            index = max;
        }else if (index >= max && val == 1){
            index = 0;
        }
        else {
            index = index + val;
        }
        return index;
    }
  
    return (

        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "auto", backgroundColor: "yellow", borderStyle: "solid", }} >
            <p style={{margin: "auto"}}> Image: {index+1} / {imgArr.length}</p>
            <img src={imgArr[index]} style={{width: "70%", height: "40vh", margin: "auto"}} alt="project images" />
        
            <div style={{display: "flex", justifyContent: "center", height: "100%", backgroundColor: "blue"}}>
                <button style={{width: "150px", height: "40px",  }} onClick={() => setIndex(ControlLimit(index,imgArr.length-1, -1))} >  Left </button>
                <button style={{width: "150px", height: "40px",  }} onClick={() => setIndex(ControlLimit(index,imgArr.length-1, +1))} > Right </button>
            </div>
        </div>
    );
};

export default RightSide;