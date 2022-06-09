import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";

function ProfileWidgetRow({ type, info }) {
    return (
        <div className="home-profile__row">
            <label>{type}: </label>
            <Title classes="home-profile__text" value={info} size={4} />
        </div>
    );
}

ProfileWidgetRow.propTypes = {
    type: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}

export default ProfileWidgetRow;
