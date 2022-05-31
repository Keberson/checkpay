import React, {useState} from "react";

function Form() {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);

    const checkCorrect = (fieldType, value) => {
        switch (fieldType) {
            case 'email':
                return Boolean(value.toLowerCase().match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ));
            case 'password':
                return Boolean(value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20})/))
            default:
                return false;
        }
    }

    const emailHandler = (e) => {
        setValidEmail(checkCorrect('email', e.target.value));
    }

    const passwordHandler = (e) => {
        setValidPassword(checkCorrect('password', e.target.value));
    }


    const submitForm = (e) => {
        e.preventDefault();
        // TODO(keberson): отправка данных на сервер
    };

    return (
        <form className="authorization__form">
            <div className="authorization__inputs">
                <div className="authorization__field">
                    <div className="authorization__input-wrapper">
                        <svg className="authorization__input-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0685 3.85339H2.93155C1.31516 3.85339 0 5.16856 0 6.78494V17.2151C0 18.8315 1.31516 20.1466 2.93155 20.1466H21.0685C22.6848 20.1466 24 18.8315 24 17.2151V6.78526C24.0003 5.16856 22.6852 3.85339 21.0685 3.85339ZM19.636 5.7659L12 10.6855L4.36401 5.7659H19.636ZM21.0685 18.2345H2.93155C2.36959 18.2345 1.9125 17.7771 1.9125 17.2154V6.83945L11.41 12.9467C11.4227 12.9547 11.4364 12.9601 11.4495 12.9674C11.4632 12.9751 11.4772 12.9824 11.4913 12.9894C11.5649 13.0274 11.6408 13.058 11.7182 13.078C11.7262 13.0803 11.7342 13.0812 11.7421 13.0831C11.8272 13.1032 11.9133 13.1156 11.9994 13.1156C11.9997 13.1156 12 13.1156 12 13.1156C12.0006 13.1156 12.001 13.1156 12.0013 13.1156C12.0873 13.1156 12.1734 13.1035 12.2585 13.0831C12.2665 13.0812 12.2744 13.0803 12.2824 13.078C12.3599 13.058 12.4354 13.0274 12.5094 12.9894C12.5234 12.9824 12.5374 12.9751 12.5511 12.9674C12.5642 12.9601 12.5779 12.9547 12.5906 12.9467L22.0881 6.83945V17.2151C22.0878 17.7771 21.6304 18.2345 21.0685 18.2345Z"
                                fill="#FAFAFA"/>
                        </svg>
                        <input type="email"
                               className="authorization__input"
                               placeholder="Email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               onBlur={emailHandler}
                        />
                    </div>
                    {!validEmail && <p className="input_invalid">Incorrect email</p>}
                </div>
                <div className="authorization__field">
                    <div className="authorization__input-wrapper">
                        <svg className="authorization__input-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.72738 24H19.2728C19.8753 24 20.3637 23.5116 20.3637 22.9091V10.5455C20.3637 9.94298 19.8753 9.45455 19.2728 9.45455H18.1819V6.18182C18.1819 2.77316 15.4088 0 12.0001 0C8.59146 0 5.81829 2.77316 5.81829 6.18182V9.45455H4.72738C4.12491 9.45455 3.63647 9.94298 3.63647 10.5455V22.9091C3.63647 23.5116 4.12491 24 4.72738 24ZM18.1819 13C18.1819 14.5 18.1819 19.5 18.1819 19.5C18.1819 19.5 18.1819 18.9985 18.1819 20.4985C18.1819 21.9985 18.1819 22 17.0001 22C15.8183 22 11.5001 22 11.5001 22C11.5001 22 8.18195 22 7.00012 22C5.81829 22 5.81829 22.0262 5.81829 20.615C5.81829 19.2038 5.81829 17 5.81829 17C5.81829 17 5.81829 14.5 5.81829 13C5.81829 11.5 5.50012 11.5 7.00012 11.5C8.50012 11.5 9.50012 11.5 9.50012 11.5H12.0001H15.0001C15.0001 11.5 16.4143 11.5 17.0001 11.5C18.1819 11.5 18.1819 11.5 18.1819 13ZM8.00011 6.18182C8.00011 3.97622 9.79451 2.18182 12.0001 2.18182C14.2057 2.18182 16.0001 3.97622 16.0001 6.18182V9.45455H8.00011V6.18182Z"
                                fill="#FAFAFA"/>
                        </svg>
                        <input type="password"
                               className="authorization__input"
                               placeholder="Password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               onBlur={passwordHandler}
                        />
                    </div>
                    {!validPassword && <p className="input_invalid">Password's length must be more than 7 symbols</p>}
                </div>
            </div>
            <a href="#" className="authorization__forgot-password">Forgot your password?</a>
            <input type="submit"
                   className="authorization__button button"
                   value="Sign In"
            />
        </form>
    );
}

export default Form;
