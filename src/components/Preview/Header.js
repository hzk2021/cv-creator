import React from "react";
import {StyledImportantText, StyledLabel} from "../Preview/Misc";

export default function Header ({firstName, lastName, title}) {
    return (
    <div className="">
        <p className="mb-1">{<StyledImportantText text={firstName}/>} <StyledImportantText text={lastName}/></p>
        <p>{<StyledLabel text={title} />}</p>
        
    </div>
    );
}