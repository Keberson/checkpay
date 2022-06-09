import React from "react";
import Title from "../../components/Title";
import Link from "../../components/Link";
import Form from "./Form";

function LeftSide() {
    return (
        <div className="registration__left-side registration__side">
            <div className="registration__titles-wrapper">
                <Link classes="registration__title" link="/auth">
                    <Title classes="registration__title title_small-screen" value="Sign In" size={1} />
                </Link>
                <Title classes="registration__title title_active" value="Sign Up" size={1} />
            </div>
            <Form />
        </div>
    );
}

export default LeftSide;
