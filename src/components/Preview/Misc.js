import React from "react";

function StyledImportantText({text}) {
    return <span className="font-bold text-3xl text-white">{text}</span>
}

function StyledSmallText({text}) {
    return <span>{text}</span>

}

function StyledLabel({text}) {
    return <span className="text-black">{text}</span>

}

export {StyledImportantText, StyledSmallText, StyledLabel}