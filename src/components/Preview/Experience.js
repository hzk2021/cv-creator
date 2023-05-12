import React from "react";
import {StyledSmallText} from "./Misc";

export default function Experience ({position, company, city, from, to}) {
    return (
    <div className="bg-blue-500 width-500">
        <p>{<StyledSmallText text={position}/>}</p>
        <p>{<StyledSmallText text={company} />}</p>
        <p>{<StyledSmallText text={city} />}</p>
        <p>{<StyledSmallText text={from} />}</p>
        <p>{<StyledSmallText text={to} />}</p>
    </div>
    );
}