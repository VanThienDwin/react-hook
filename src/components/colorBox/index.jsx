import React, { useState } from "react";
import './colorBox.css'

function getRandomColor(){
  const COLOR_LIST=['red','yellow','green','black','blue'];
  const randomIndex=Math.trunc(Math.random()*4);
  return COLOR_LIST[randomIndex];
}

 const ColorBox=()=>{
   //set color lưu vào local storage
   //Đưa vào dạng call back function để initColor sử dụng 1 lần
  const [color,setColor]= useState(()=>{
    const initColor=localStorage.getItem('box_color')||'pink';
    console.log(initColor);
    return initColor;
  });
  function handleBox(){
    const newColor=getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color',newColor);
  }
    return(
        <div className="color-box"
        style={{backgroundColor:color}}
        onClick={handleBox}>
          COLOR BOX 
        </div>
    );
}
export default ColorBox;