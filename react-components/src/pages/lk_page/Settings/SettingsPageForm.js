import React, {useState} from "react";
import PropTypes from "prop-types";

function SettingsPageForm({ inputsObject }) {
    return (
        <form className="settings-edit__inputs-wrapper" onSubmit={inputsObject.submitChanges}>
            <div className="settings-edit__input-wrapper">
                <input type="text"
                       className="settings-edit__input"
                       value={inputsObject.name}
                       onChange={(e) => inputsObject.setName(e.target.value)}
                />
            </div>
            <div className="settings-edit__input-wrapper">
                <input type="text"
                       className="settings-edit__input"
                       value={inputsObject.surname}
                       onChange={(e) => inputsObject.setSurname(e.target.value)}
                />
            </div>
            <div className="settings-edit__input-wrapper">
                <input type="text"
                       className="settings-edit__input"
                       value={inputsObject.country}
                       onChange={(e) => inputsObject.setCountry(e.target.value)}
                />
            </div>
            <div className="settings-edit__input-wrapper">
                <input type="text"
                       className="settings-edit__input"
                       value={inputsObject.nickname}
                       onChange={(e) => inputsObject.setNickname(e.target.value)}
                />
            </div>
            <div className="settings-edit__input-wrapper">
                <input type="text"
                       className="settings-edit__input"
                       value={inputsObject.email}
                       onChange={(e) => inputsObject.setEmail(e.target.value)}
                />
            </div>
            <div className="settings-edit__input-wrapper">
                <input type="password"
                       className="settings-edit__input"
                       value={inputsObject.password}
                       onChange={(e) => inputsObject.setPassword(e.target.value)}
                />
            </div>
            <div className="settings-edit__button-wrapper">
                <input type="submit" className="settings-edit__button button" value="Save" />
            </div>
        </form>
    );
}

SettingsPageForm.propTypes = {
    inputsObject: PropTypes.object.isRequired
}

export default SettingsPageForm;
