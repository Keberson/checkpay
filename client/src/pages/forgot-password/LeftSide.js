import React from "react";
import Form from "./Form";
import Title from "../../components/Title";
import {Link} from "react-router-dom";

function LeftSide() {
    return (
        <div className="forgotPas__left-side forgotPas__side">
            <div className="forgotPas__titles-wrapper">
                <Title classes="forgotPas__title title_active" value="Forgot password" size={1}/>
            </div>
            <Form />
            <Link to="/auth" className="forgotPas__back link">
                <Title classes="forgotPas__title" value="Back" size={1}/>
            </Link>
        </div>
    );
}

export default LeftSide;
