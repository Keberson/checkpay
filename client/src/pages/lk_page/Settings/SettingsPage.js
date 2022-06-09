import React from "react";
import './settings.css'
import SettingsPageAvatar from "./SettingsPageAvatar";
import SettingsPageForm from "./SettingsPageForm";

function SettingsPage() {
    return (
        <div className="settings__main-wrapper">
            <div className="settings-main__widget settings-widget_edit">
                <SettingsPageForm />
            </div>
            <SettingsPageAvatar />
            <div className="settings-delete__button-wrapper">
                <button className="settings-delete__button button">Delete account</button>
            </div>
        </div>
    );
}

export default SettingsPage;
