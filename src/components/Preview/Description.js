import React from "react";
import {StyledSmallText, StyledLabel} from "./Misc";

export default function Description ({description}) {
    return (
    <div className="p-2 mb-5">
        <StyledLabel text="Description"/>
        <hr></hr>
        <p>{<StyledSmallText text={description} />}</p>
        
    </div>
    );
}