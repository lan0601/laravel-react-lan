import React from "react";
import OffComponent from "./OffComponent";
import OnComponent from "./OnComponent";

export default function FanComponent(props){
    const {isOn} = props;
    return (
        <>
            {isOn? <OnComponent/>: <OffComponent/>}
        </>
    )
    // if(isOn){
    //     return <OnComponent/>
    // }else{
    //     return <OffComponent/>
    // }
}