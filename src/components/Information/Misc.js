import React from "react";

function StyledTitle({text}) {
    return <h1>{text}</h1>
}

function StyledTextInput({placeholder, onChangeHandler}) {
    return <input onChange={e => onChangeHandler(e.target.value)}
                  placeholder={placeholder} 
                  className="border-2 outline-none border-transparent resize-none focus:border-black">
    </input>
}

function StyledTextArea({placeholder, onChangeHandler}) {
    return <textarea 
                onChange={e => onChangeHandler(e.target.value)}
                placeholder={placeholder} 
                className="border-2 outline-none border-transparent resize-none focus:border-black">
            </textarea>
}

export {StyledTitle, StyledTextInput, StyledTextArea}