import React from "react";
import './style.css'
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Registration() {
    return (
        <div className="auth-container">
            <div className="authorization-wrapper">
                <div className="authorization">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Registration;
