import React from "react";
import Form from "./Form";
import Title from "../../components/Title";

function LeftSide() {
    return (
        <div className="forgotPas__left-side forgotPas__side">
            <div className="forgotPas__titles-wrapper">
                <Title classes="forgotPas__title title_active" value="Forgot password" size={1}/>
            </div>
            <Form />
        </div>
    );
}

export default LeftSide;
