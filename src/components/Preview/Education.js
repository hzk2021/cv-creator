import React from "react";
import {StyledSmallText} from "./Misc";

export default function Education ({universityName, city, degree, subject, from, to}) {
    return (
    <div className="p-2 flex mb-3 last:mb-5">
        <div className="flex-1">
            <p>{<StyledSmallText text={from} classAddon="font-bold text-black"/>} - {<StyledSmallText text={to} classAddon="font-bold text-black"/>}</p>
        </div>

        <div className="flex-1">
            <p>{<StyledSmallText text={universityName} classAddon="font-bold text-black"/>}, {<StyledSmallText text={city} classAddon="font-bold text-black"/>}</p>
            <p>{<StyledSmallText text={`Degree: ${degree}`} classAddon="not-italic text-base"/>}</p>
            <p>{<StyledSmallText text={`Subject: ${subject}`} classAddon="not-italic text-base"/>}</p>
        </div>
    </div>
    );
}