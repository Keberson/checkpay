import React from "react";
import Title from "../../components/Title";
import Link from "../../components/Link";
import Form from "./Form";

function LeftSide() {
    return (
        <div className="registration__left-side registration__side">
            <div className="registration__titles-wrapper">
                <Link classes="registration__title"
                      value={<Title classes="registration__title title_small-screen" value="Sign In" />}
                      link="#" />
                <Link classes="registration__title"
                      value={<Title classes="registration__title title_active" value="Sign Up" />}
                      link="#" />
            </div>
            <Form />
        </div>
    );
}

export default LeftSide;
