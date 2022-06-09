import React from "react";
import source from '../sources/avatar.png'

function SettingsPageAvatar() {
    // TODO(keberson): загрузка и изменение аватара пользователя

    return (
        <div className="settings-main__side">
            <div className="settings-avatar__wrapper">
                <img src={source} alt="User's avatar" className="settings-avatar__picture" />
            </div>
            <div className="settings-upload__wrapper">
                <button className="settings-upload__button button">Upload</button>
            </div>
        </div>
    );
}

export default SettingsPageAvatar;
