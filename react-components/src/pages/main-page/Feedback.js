import React from "react";
import Title from "../../components/Title";
import Form from "./Form";

function Feedback() {
    return (
        <div className="feedback">
            <div className="container">
                <Title classes="feedback__title-wrapper" value="Contact Us" size={1} />
                <Form />
            </div>
        </div>
    );
}

export default Feedback;
