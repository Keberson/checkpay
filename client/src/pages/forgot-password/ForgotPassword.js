import React, {useContext} from "react";
import './style.css'
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import PopUp from "../../components/PopUp";
import {AuthContext} from "../../context/auth.context";

function Registration() {
    const {isShowPopUp} = useContext(AuthContext);

    return (
        <div className="forgotPas-container">
            {isShowPopUp && <PopUp message="Hello world"/>}
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
