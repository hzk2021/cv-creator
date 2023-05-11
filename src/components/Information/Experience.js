import React from "react";
import {StyledTitle, StyledTextInput} from "../Misc";

export default function Experience() {
    return (
    <div className="flex flex-auto flex-col items-left gap-3">

        <StyledTitle text={"Experience"}/>
        <StyledTextInput placeholder={"Position"} />
        <StyledTextInput placeholder={"Company"} />
        <StyledTextInput placeholder={"City"} />

        <StyledTextInput placeholder={"From"} />
        <StyledTextInput placeholder={"To"} />
    </div>
    );
}