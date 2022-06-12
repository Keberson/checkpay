import React, {useContext} from "react";
import './settings.css'
import SettingsPageAvatar from "./SettingsPageAvatar";
import SettingsPageForm from "./SettingsPageForm";
import {useHTTP} from "../../../hooks/https.hook";
import {AuthContext} from "../../../context/auth.context";
import {toast} from "react-toastify";

function SettingsPage() {
    const {request} = useHTTP();
    const {token, userID} = useContext(AuthContext);

    const deleteAccount = async (e) => {
        try {
            const data = await request(`/api/lk/setting/${userID}`, 'DELETE', null, {
                authorization: `Bearer ${token}`
            });
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="settings__main-wrapper">
            <div className="settings-main__widget settings-widget_edit">
                <SettingsPageForm />
            </div>
            <SettingsPageAvatar />
            <div className="settings-delete__button-wrapper">
                <button onClick={deleteAccount} className="settings-delete__button button">Delete account</button>
            </div>
        </div>
    );
}

export default SettingsPage;
