import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";

function ProfileWidgetRow({ info }) {
    return (
        <div className="home-profile__row">
            <Title classes="home-profile__text" value={info} size={4} />
        </div>
    );
}

ProfileWidgetRow.propTypes = {
    info: PropTypes.string.isRequired
}

export default ProfileWidgetRow;
