import React, {useContext} from "react";
import PropTypes from "prop-types";
import './popup.css'
import {AuthContext} from "../context/auth.context";
import {useHTTP} from "../hooks/https.hook";

function PopUp({ message }) {
    const {setIsShowPopUp} = useContext(AuthContext);
    const {clearError} = useHTTP();
    const deletePopUp = () => {
        setIsShowPopUp(false);
        clearError();
    };

    return (
        <div className="popup" onClick={deletePopUp}>
            <span className="popup__text">{message}</span>
        </div>
    );
}

PopUp.propTypes = {
    message: PropTypes.string.isRequired
}

export default PopUp;
