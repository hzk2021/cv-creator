import React from "react";
import {StyledSmallText, StyledLabel} from "../Preview/Misc";

export default function Body ({address, phoneNumber, email, description}) {
    return (
    <div className="bg-blue-500 width-500">
        <StyledLabel text="Description"/>
        <p>{<StyledSmallText text={address}/>}</p>
        <p>{<StyledSmallText text={phoneNumber} />}</p>
        <p>{<StyledSmallText text={email} />}</p>
        <p>{<StyledSmallText text={description} />}</p>
        
    </div>
    );
}