import React from "react";
import './style.css'
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Registration() {
    return (
        <div className="forgotPas-container">
            <div className="forgotPas-wrapper">
                <div className="forgotPas">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Registration;
