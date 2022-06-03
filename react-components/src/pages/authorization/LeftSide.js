import React from "react";
import Form from "./Form";
import Link from "../../components/Link";
import Title from "../../components/Title";

function LeftSide() {
    return (
        <div className="authorization__left-side authorization__side">
            <div className="authorization__titles-wrapper">
                <Link classes="authorization__title" link="#">
                    <Title classes="authorization__title title_active" value="Sign In" size={1}/>
                </Link>
                <Link classes="authorization__title" link="#">
                    <Title classes="authorization__title title_small-screen" value="Sign Up" size={1} />
                </Link>
            </div>
            <Form />
        </div>
    );
}

export default LeftSide;
