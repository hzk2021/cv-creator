import React from "react";

function StyledTitle({text}) {
    return <h1>{text}</h1>
}

function StyledTextInput({placeholder, onChangeHandler, index}) {
    return (
    index ? 
        <input onChange={e => onChangeHandler(e.target.value, index)}
            placeholder={placeholder} 
            className="border-2 outline-none border-transparent resize-none focus:border-black">
        </input>
          :
        <input onChange={e => onChangeHandler(e.target.value)}
          placeholder={placeholder} 
          className="border-2 outline-none border-transparent resize-none focus:border-black">
        </input>
        
    )
}

function StyledTextArea({placeholder, onChangeHandler}) {
    return <textarea 
                onChange={e => onChangeHandler(e.target.value)}
                placeholder={placeholder} 
                className="border-2 outline-none border-transparent resize-none focus:border-black">
            </textarea>
}

function AddExperienceButton({onClickHandler}){
    return <button onClick={onClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
}

function DeleteExperienceButton({onClickHandler, index}){
    return <button onClick={e => onClickHandler(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
}

export {StyledTitle, StyledTextInput, StyledTextArea, AddExperienceButton, DeleteExperienceButton}