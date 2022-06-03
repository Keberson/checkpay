import React from "react";
import PropTypes from "prop-types";
import ProfileWidgetRow from "./ProfileWidgetRow";

function ProfileWidget({ userInfo }) {
    return (
        <div className="home-main__widget home-widget_profile">
            <ProfileWidgetRow info={userInfo.name} />
            <ProfileWidgetRow info={userInfo.surname} />
            <ProfileWidgetRow info={userInfo.country} />
            <ProfileWidgetRow info={userInfo.nickname} />
            <ProfileWidgetRow info={userInfo.email} />
        </div>
    );
}

ProfileWidget.propTypes = {
    userInfo: PropTypes.objectOf(PropTypes.string).isRequired
}

export default ProfileWidget;
