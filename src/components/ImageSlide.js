import React, { useState } from 'react';
import '../css/Projects.css'


import invpic1 from '../images/invent1.jpg';
import invpic2 from '../images/invent2.jpg';
import invpic3 from '../images/invent3.jpg';
import invpic4 from '../images/invent4.jpg';
import loopypic1 from '../images/loopy1.jpg';
import loopypic2 from '../images/loopy2.jpg';
import p1 from "../images/planone/1.png";
import p2 from "../images/planone/2.png";
import p3 from "../images/planone/3.png";
import p4 from "../images/planone/4.png";


const ImageSlide = (props) => {

    // (1) Receiving image data from Project.
    // (4) Display, 2 Buttons (Change picture by sliding it from left/right)
    const [index, setIndex]  = useState(0);
    const pIndex = props.value; // 1, 2, 3, 4
    const imgArr = [p1, p2, p3, p4, invpic1, invpic2, invpic3, invpic4, loopypic1, loopypic2]; // 10
    const imgSubArr = imgArr.slice(pIndex[0], pIndex[pIndex.length]);

    function ControlLimit(index, max, val){
        //alert("val: " + val);
        if (index <= 0 && val === -1){
            index = max;
        }else if (index >= max && val === 1){
            index = 0;
        }
        else {
            index = index + val;
        }
        return index;
    }
  
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "auto", }} >
            <img src={imgSubArr[index]} style={{width: "40%", height: "35vh", margin: "10px auto", borderStyle: "solid", borderWidth: "5px", }} alt="project images" />
            <p style={{margin: "auto", fontSize: "1.3em"}}> {index+1} / {pIndex.length}</p>
        
            <div style={{display: "flex", justifyContent: "center", height: "100%", margin: 0}}>
                <button className="testButton" style={{}} onClick={() => setIndex(ControlLimit(index,imgArr.length-1, -1))} > Left </button>
                <button className="testButton" style={{marginLeft: "2vh"}} onClick={() => setIndex(ControlLimit(index,imgArr.length-1, +1))} > Right </button>
            </div>
        </div>
    );
};

export default ImageSlide;