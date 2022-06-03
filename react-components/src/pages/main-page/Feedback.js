import React from "react";
import Title from "../../components/Title";
import Form from "./Form";

function Feedback() {
    return (
        <div className="main-feedback">
            <div className="main-container">
                <Title classes="main-feedback__title-wrapper" value="Contact Us" size={1} />
                <Form />
            </div>
        </div>
    );
}

export default Feedback;
