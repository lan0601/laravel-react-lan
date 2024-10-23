import React from "react";
import FanComponent from "./FanComponent";
import FanCountComponent from "./FunCountComponent";

export default function ApplianceComponent(){
    return(
        <>
            <FanComponent isOn={true}/>
            <FanCountComponent countFan={11}/>
        </>
        
    )
}