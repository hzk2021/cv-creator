import React from "react";
import {StyledTextInput, DeleteButton} from "./Misc";

export default function Education({universityEvent, cityEvent, degreeEvent, subjectEvent, fromEvent, toEvent, deleteEvent, index}) {
    return (
    <div className="flex flex-auto flex-col items-left">

        <StyledTextInput placeholder={"University name"} onChangeHandler={universityEvent} index={index}/>
        <StyledTextInput placeholder={"City"} onChangeHandler={cityEvent} index={index}/>
        <StyledTextInput placeholder={"Degree"} onChangeHandler={degreeEvent} index={index}/>
        <StyledTextInput placeholder={"Subject"} onChangeHandler={subjectEvent} index={index}/>

        <StyledTextInput placeholder={"From"} onChangeHandler={fromEvent} index={index}/>
        <StyledTextInput placeholder={"To"} onChangeHandler={toEvent} index={index}/>

        <DeleteButton onClickHandler={deleteEvent} index={index}/>
    </div>
    );
}