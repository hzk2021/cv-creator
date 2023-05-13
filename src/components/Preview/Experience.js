import React from "react";
import {StyledSmallText} from "./Misc";

export default function Experience ({position, company, city, from, to}) {
    return (
    <div className="p-2 flex mb-3 last:mb-5">
        <div className="flex-1">
            <p>{<StyledSmallText text={from} />} - {<StyledSmallText text={to} />}</p>
        </div>

        <div className="flex-1">
            <p>{<StyledSmallText text={position} classAddon="font-bold text-black"/>}</p>
            <p>{<StyledSmallText text={company} />}, {<StyledSmallText text={city} />}</p>
        </div>
    </div>
    );
}