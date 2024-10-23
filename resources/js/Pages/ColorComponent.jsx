import React,{useState} from "react";

export default function ColorComponent(){
    const [color,setColor] = useState("red");

    return(
        <>
            <h1>Fav Color is {color}</h1>
            <button type="button" onClick={()=>setColor("blue")}> Color Change</button>
        </>
    )
}