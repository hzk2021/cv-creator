import React from "react";
import {StyledTitle, StyledTextInput, StyledTextArea} from "./Misc";

export default function PersonalInfo ({firstNameEvent, lastNameEvent, titleEvent, addressEvent, phoneNumberEvent, emailEvent, descriptionEvent}) {
    return (
    <div className="flex flex-auto flex-col items-left gap-3">

        <StyledTitle text={"Personal Information"}/>
        <StyledTextInput placeholder={"First name"} onChangeHandler={firstNameEvent} />
        <StyledTextInput placeholder={"Last name"} onChangeHandler={lastNameEvent}/>
        <StyledTextInput placeholder={"Title name"} onChangeHandler={titleEvent}/>

        <StyledTextInput placeholder={"Address"} onChangeHandler={addressEvent} />
        <StyledTextInput placeholder={"Phone number"} onChangeHandler={phoneNumberEvent} />
        <StyledTextInput placeholder={"Email"} onChangeHandler={emailEvent} />
        <StyledTextArea  placeholder={"Description"} onChangeHandler={descriptionEvent} />

    </div>
    );
}