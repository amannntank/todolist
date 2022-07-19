import React, { useState } from "react";

function ToDoList(props){
    const [overLine, setOverLine] = useState(false);

    return <div>
        <li onClick={()=>{
            setOverLine((preValue)=>{
                return !preValue
            })
        }} style={{textDecoration : overLine ? "line-through" : "none"}} >{props.item}</li>
        
        <button onClick={() => { props.onClickDelete(props.id) }} className="custom" >delete</button>
    </div>  
    
}

export default ToDoList;