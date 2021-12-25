import React, { useState, useEffect }  from "react";
const clicked = ()=> {
  console.log("clicked")
}
const Card = ({Simg,Aname,count,click}) => {
  return (
    <div onClick={click} id={count}>
  
      <img src={Simg} alt={Aname} style={{width:'100px',height:'150px'}} id={count}></img>
      <h3 id={count} >{Aname}</h3>
     

    </div>
  );
};
export default Card;