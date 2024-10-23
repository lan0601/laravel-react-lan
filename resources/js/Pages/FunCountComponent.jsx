import React from "react";

export default function FanCountComponent(x){
    const {countFan} = x;
    return(
        <>
            <h1>Fans</h1>
            <h2></h2>
            {countFan > 0 && <h2> You have {countFan} fans in your house</h2>}
        </>
    )
}