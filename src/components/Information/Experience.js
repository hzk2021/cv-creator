import React from "react";
import {StyledTextInput, DeleteExperienceButton} from "./Misc";

export default function Experience({positionEvent, companyEvent, cityEvent, fromEvent, toEvent, deleteEvent, index}) {
    return (
    <div className="flex flex-auto flex-col items-left">

        <StyledTextInput placeholder={"Position"} onChangeHandler={positionEvent} index={index}/>
        <StyledTextInput placeholder={"Company"} onChangeHandler={companyEvent} index={index}/>
        <StyledTextInput placeholder={"City"} onChangeHandler={cityEvent} index={index}/>

        <StyledTextInput placeholder={"From"} onChangeHandler={fromEvent} index={index}/>
        <StyledTextInput placeholder={"To"} onChangeHandler={toEvent} index={index}/>

        <DeleteExperienceButton onClickHandler={deleteEvent} index={index}/>
    </div>
    );
}