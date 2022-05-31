import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";

function RightSide() {
    return (
        <div className="authorization__right-side authorization__side">
            <Title classes="authorization__title" value="Welcome back!" size={1} />
            <Title classes="authorization__subtitle" value="Log in to your personal account to continue earning" />
            <Button position="authorization" value="Sign Up" />
        </div>
    );
}

export default RightSide;
