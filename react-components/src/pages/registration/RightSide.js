import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

function RightSide() {
    return (
        <div className="registration__right-side registration__side">
            <Title classes="registration__title" value="Hello, Friend!" size={1}/>
            <Title classes="registration__subtitle" value="Enter your personal details and join to pur
                community" />
            <Link to='/auth'>
                <Button position="registration" value="Sign In" />
            </Link>
        </div>
    );
}

export default RightSide;
