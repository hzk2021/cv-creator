import React from "react";
import {StyledImportantText, StyledLabel} from "../Preview/Misc";

export default function Header ({firstName, lastName, title}) {
    return (
    <div className="bg-blue-500 width-500">
        <p>{<StyledImportantText text={firstName}/>}  &nbsp; <StyledImportantText text={lastName}/></p>
        <p>{<StyledLabel text={title} />}</p>
        
    </div>
    );
}