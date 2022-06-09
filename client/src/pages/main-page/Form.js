import React, {useState} from "react";
import {useHTTP} from "../../hooks/https.hook";

function Form() {
    const {loading, request} = useHTTP();
    const [form, setForm] = useState({
        name: '',
        email: '',
        msg: ''
    });
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
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

    const submitForm = async (e) => {
        e.preventDefault();
        if (validName && validEmail && validMsg) {
            try {
                await request('/api/home', 'POST', {...form});
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <form className="main-feedback__inputs" onSubmit={submitForm}>
            <div className="main-feedback__input-wrapper">
                <input type="text"
                       className="main-feedback__input main-input_name"
                       placeholder="Name"
                       value={form.name}
                       onChange={(e) => setForm({...form, name: e.target.value})}
                       onBlur={nameHandler}
                       required
                       disabled={loading}
                />
                {!validName && <p className="main-input_invalid">Name's length must be more than 3 symbols</p>}
            </div>
            <div className="main-feedback__input-wrapper">
                <input type="text"
                       className="main-feedback__input main-input_email"
                       placeholder="Email"
                       value={form.email}
                       onChange={(e) => setForm({...form, email: e.target.value})}
                       onBlur={emailHandler}
                       required
                       disabled={loading}
                />
                {!validEmail && <p className="main-input_invalid">Incorrect email</p>}
            </div>
            <div className="main-feedback__input-wrapper main-input_messages">
                <input type="text"
                       className="main-feedback__input"
                       placeholder="Message"
                       value={form.msg}
                       onChange={(e) => setForm({...form, msg: e.target.value})}
                       onBlur={msgHandler}
                       required
                       disabled={loading}
                />
                {!validMsg && <p className="main-input_invalid">Message's length must be more than 3 symbols</p>}
            </div>
            <div className="main-feedback__button-wrapper">
                <input type="submit"
                       className="main-feedback__button button"
                       value="Send"
                       disabled={loading}
                />
            </div>
        </form>
    );
}

export default Form;
