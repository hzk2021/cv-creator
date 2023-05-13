import React from "react";
import {StyledLabel, StyledSmallText} from "./Misc";

export default function PersonalDetails ({address, phoneNumber, email}) {
    return (
    <div className="p-2">
        <StyledLabel text="Personal Details"/>
        <hr></hr>
        <div>
            <StyledSmallText text="Address" classAddon="text-sm not-italic text-gray-800 font-medium"/>
            <p>{<StyledSmallText text={address} classAddon="text-sm not-italic"/>}</p>
        </div>
        <div>
            <StyledSmallText text="Phone Number" classAddon="text-sm not-italic text-gray-800 font-medium"/>
            <p>{<StyledSmallText text={phoneNumber} classAddon="text-sm not-italic" />}</p>
        </div>
        <div>
            <StyledSmallText text="Email" classAddon="text-sm not-italic text-gray-800 font-medium"/>
            <p>{<StyledSmallText text={email} classAddon="text-sm not-italic"/>}</p>
        </div>
    </div>
    );
}