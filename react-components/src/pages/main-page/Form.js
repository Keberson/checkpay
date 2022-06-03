import React, {useState} from "react";

function Form() {
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(true);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const [msg, setMsg] = useState('');
    const [validMsg, setValidMsg] = useState(true);

    const checkCorrect = (fieldType, value) => {
        switch (fieldType) {
            case 'name':
            case 'message':
                return value.length >= 3;
            case 'email':
                return Boolean(value.toLowerCase().match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ));
            default:
                return false;
        }
    }

    const nameHandler = (e) => {
        setValidName(checkCorrect('name', e.target.value));
    }

    const emailHandler = (e) => {
        setValidEmail(checkCorrect('email', e.target.value));
    }

    const msgHandler = (e) => {
        setValidMsg(checkCorrect('message', e.target.value));
    }

    const submitForm = (e) => {
        e.preventDefault();
        // TODO(keberson): отправка данных на сервер
    };

    return (
        <form className="main-feedback__inputs" onSubmit={submitForm}>
            <div className="main-feedback__input-wrapper">
                <input type="text"
                       className="main-feedback__input main-input_name"
                       placeholder="Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       onBlur={nameHandler}
                       required/>
                {!validName && <p className="input_invalid">Name's length must be more than 3 symbols</p>}
            </div>
            <div className="main-feedback__input-wrapper">
                <input type="text"
                       className="main-feedback__input main-input_email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       onBlur={emailHandler}
                       required/>
                {!validEmail && <p className="input_invalid">Incorrect email</p>}
            </div>
            <div className="main-feedback__input-wrapper main-input_messages">
                <input type="text"
                       className="main-feedback__input"
                       placeholder="Message"
                       value={msg}
                       onChange={(e) => setMsg(e.target.value)}
                       onBlur={msgHandler}
                       required/>
                {!validMsg && <p className="input_invalid">Message's length must be more than 3 symbols</p>}
            </div>
            <div className="main-feedback__button-wrapper">
                <input type="submit"
                       className="main-feedback__button button"
                       value="Send"/>
            </div>
        </form>
    );
}

export default Form;
