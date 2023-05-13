import React from "react";

function StyledImportantText({text}) {
    return <span className="font-bold text-4xl text-white">{text}</span>
}

function StyledSmallText({text, classAddon}) {
    return classAddon ? <span className={`italic text-base text-slate-500 ${classAddon}`}>{text}</span>
    : <span className="italic text-base text-slate-500">{text}</span>

}

function StyledLabel({text, classAddon}) {
    return classAddon ? <span className={`text-neutral-900 font-medium text-lg ${classAddon}`}>{text}</span>
    :
    <span className="text-neutral-900 font-medium text-lg">{text}</span>

}

export {StyledImportantText, StyledSmallText, StyledLabel}