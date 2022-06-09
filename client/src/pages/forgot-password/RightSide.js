import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

function RightSide() {
    return (
        <div className="forgotPas__right-side forgotPas__side">
            <Title classes="forgotPas__title" value="Did you remember the password?" size={1} />
            <Title classes="forgotPas__subtitle" value="Log in to your personal account" />
            <Link to='/auth'>
                <Button position="forgotPas" value="Sign In" />
            </Link>
        </div>
    );
}

export default RightSide;
