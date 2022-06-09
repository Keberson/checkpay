import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

function RightSide() {
    return (
        <div className="forgotPas__right-side forgotPas__side">
            <Title classes="forgotPas__title" value="Welcome back!" size={1} />
            <Title classes="forgotPas__subtitle" value="Log in to your personal account to continue earning" />
            <Link to='/reg'>
                <Button position="forgotPas" value="Sign Up" />
            </Link>
        </div>
    );
}

export default RightSide;
