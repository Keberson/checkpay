import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";

function RightSide() {
    return (
        <div className="registration__right-side registration__side">
            <Title classes="registration__title" value="Hello, Friend!" size={1}/>
            <Title classes="registration__subtitle" value="Enter your personal details and join to pur
                community" />
            <Button position="registration" value="Sign In" />
        </div>
    );
}

export default RightSide;
