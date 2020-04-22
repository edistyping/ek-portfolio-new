import React, { useState } from 'react';

const ImageSlide = (props) => {

    // (1) Receiving image data from Project.s
    // (4) Display, 2 Buttons (Change picture by sliding it from left/right)
    const [index, setIndex]  = useState(0);
    const imgArr = props.value;

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

        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "auto", backgroundColor: "yellow", }} >
            <p style={{margin: "auto"}}> Image: {index+1} / {imgArr.length}</p>
            <img src={imgArr[index]} style={{width: "45%", height: "35vh", margin: "auto"}} alt="project images" />
        
            <div style={{display: "flex", justifyContent: "center", height: "100%", backgroundColor: "blue"}}>
                <button style={{width: "150px", height: "40px",  }} onClick={() => setIndex(ControlLimit(index,imgArr.length-1, -1))} >  Left </button>
                <button style={{width: "150px", height: "40px",  }} onClick={() => setIndex(ControlLimit(index,imgArr.length-1, +1))} > Right </button>
            </div>
        </div>
    );
};

export default ImageSlide;