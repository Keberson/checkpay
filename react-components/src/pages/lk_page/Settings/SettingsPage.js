import React, {useState} from "react";
import PropTypes from "prop-types";
import './settings.css'
import SettingsPageAvatar from "./SettingsPageAvatar";
import SettingsPageForm from "./SettingsPageForm";

function SettingsPage({ data }) {
    const [name, setName] = useState(data.name);
    const [surname, setSurname] = useState(data.surname);
    const [country, setCountry] = useState(data.country);
    const [nickname, setNickname] = useState(data.nickname);
    const [email, setEmail] = useState(data.email);
    const [password, setPassword] = useState(data.password);

    const submitChanges = (e) => {
        e.preventDefault();
        // TODO(keberson): отправка данных на сервер
    }

    return (
        <div className="settings__main-wrapper">
            <div className="settings-main__widget settings-widget_edit">
                <SettingsPageForm inputsObject={{
                    name: name,
                    setName: setName,
                    surname: surname,
                    setSurname: setSurname,
                    country: country,
                    setCountry: setCountry,
                    nickname: nickname,
                    setNickname: setNickname,
                    email: email,
                    setEmail: setEmail,
                    password: password,
                    setPassword: setPassword
                }} />
            </div>
            <SettingsPageAvatar />
            <div className="settings-delete__button-wrapper">
                <button className="settings-delete__button button">Delete account</button>
            </div>
        </div>
    );
}

SettingsPage.propTypes = {
    data: PropTypes.objectOf(PropTypes.string).isRequired
}

export default SettingsPage;
