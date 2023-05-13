import React from "react";

function StyledTitle({text}) {
    return <h1 className="mb-3 font-semibold">{text}</h1>
}

function StyledTextInput({placeholder, onChangeHandler, index}) {
    return (
    index ? 
        <input onChange={e => onChangeHandler(e.target.value, index)}
            placeholder={placeholder} 
            className="mb-4 border-2 outline-none border-transparent resize-none focus:border-neutral-400 rounded p-1 bg-gray-100">
        </input>
          :
        <input onChange={e => onChangeHandler(e.target.value)}
          placeholder={placeholder} 
          className="mb-4 border-2 outline-none border-transparent resize-none focus:border-neutral-400 rounded p-1 bg-gray-100">
        </input>
        
    )
}

function StyledTextArea({placeholder, onChangeHandler}) {
    return <textarea 
                onChange={e => onChangeHandler(e.target.value)}
                placeholder={placeholder} 
                className="mb-4 border-2 outline-none border-transparent resize-none focus:border-neutral-400 rounded p-1 bg-gray-100">
            </textarea>
}

function AddButton({onClickHandler}){
    return <button onClick={onClickHandler} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-full mb-5">Add</button>
}

function DeleteButton({onClickHandler, index}){
    return <button onClick={e => onClickHandler(index)} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded my-3">Delete</button>
}

export {StyledTitle, StyledTextInput, StyledTextArea, AddButton, DeleteButton}