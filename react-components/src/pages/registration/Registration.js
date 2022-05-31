import React from "react";
import './style.css'
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Registration() {
    return (
        <div className="container">
            <div className="registration-wrapper">
                <div className="registration">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Registration;
