import React, {useContext, useState} from "react";
import {useHTTP} from "../../hooks/https.hook";
import {AuthContext} from "../../context/auth.context";
import {toast} from "react-toastify";
import {Spinner} from "react-spinner-animated";

function Form() {
    const {login} = useContext(AuthContext);
    const {request, isLoading} = useHTTP();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [validUsername, setValidUsername] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validRepeatPassword, setValidRepeatPassword] = useState(true);

    const checkCorrect = (fieldType, value) => {
        switch (fieldType) {
            case 'username':
                return value.length >= 3;
            case 'email':
                return Boolean(value.toLowerCase().match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ));
            case 'password':
                return value.length >= 7;
            case 'repeat-password':
                return value === form.password;
            default:
                return false;
        }
    }
    const usernameHandler = (e) => {
        setValidUsername(checkCorrect('username', e.target.value));
    }
    const emailHandler = (e) => {
        setValidEmail(checkCorrect('email', e.target.value));
    }
    const passwordHandler = (e) => {
        setValidPassword(checkCorrect('password', e.target.value));
    }
    const repeatPasswordHandler = (e) => {
        setValidRepeatPassword(checkCorrect('repeat-password', e.target.value));
    }

    const submitForm = async (e) => {
        e.preventDefault();
        if (validUsername && validEmail && validPassword && validRepeatPassword) {
            try {
                const data = await request('/api/auth/reg', 'POST', {...form});
                login(data.jwtToken, data.userID);
                toast.success(data.message);
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            {isLoading ?
                (<Spinner center={false} text="Loading..."/>) :
                (<form className="registration__inputs" onSubmit={submitForm}>
                    <div className="registration__field">
                        <div className="registration__input-wrapper">
                            <svg className="registration__input-icon" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9999 10.5499C14.9086 10.5499 17.2749 8.18362 17.2749 5.27496C17.2749 2.36629 14.9086 0 11.9999 0C9.09123 0 6.72485 2.36629 6.72485 5.27496C6.72485 8.18362 9.09123 10.5499 11.9999 10.5499ZM11.9999 2.52189C13.518 2.52189 14.753 3.75686 14.753 5.27496C14.753 6.79305 13.518 8.02802 11.9999 8.02802C10.4818 8.02802 9.24675 6.79305 9.24675 5.27496C9.24675 3.75686 10.4818 2.52189 11.9999 2.52189Z"
                                    fill="#FAFAFA"/>
                                <path
                                    d="M12 13.0718C6.66949 13.0718 2.33276 17.4085 2.33276 22.739C2.33276 23.4354 2.89733 24 3.59371 24H20.4063C21.1027 24 21.6673 23.4354 21.6673 22.739C21.6673 17.4085 17.3305 13.0718 12 13.0718ZM4.96604 21.4781C5.56339 18.1375 8.49021 15.5937 12 15.5937C15.5098 15.5937 18.4366 18.1375 19.034 21.4781H4.96604Z"
                                    fill="#FAFAFA"/>
                            </svg>
                            <input type="text"
                                   className="registration__input"
                                   placeholder="Username"
                                   value={form.username}
                                   onChange={(e) => setForm({...form, username: e.target.value})}
                                   onBlur={usernameHandler}
                                   disabled={isLoading}
                                   required
                            />
                        </div>
                        {!validUsername && <p className="input_invalid">Username's length must be more than 3 symbols</p>}
                    </div>
                    <div className="registration__field">
                        <div className="registration__input-wrapper">
                            <svg className="registration__input-icon" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.0685 3.85339H2.93155C1.31516 3.85339 0 5.16856 0 6.78494V17.2151C0 18.8315 1.31516 20.1466 2.93155 20.1466H21.0685C22.6848 20.1466 24 18.8315 24 17.2151V6.78526C24.0003 5.16856 22.6852 3.85339 21.0685 3.85339ZM19.636 5.7659L12 10.6855L4.36401 5.7659H19.636ZM21.0685 18.2345H2.93155C2.36959 18.2345 1.9125 17.7771 1.9125 17.2154V6.83945L11.41 12.9467C11.4227 12.9547 11.4364 12.9601 11.4495 12.9674C11.4632 12.9751 11.4772 12.9824 11.4913 12.9894C11.5649 13.0274 11.6408 13.058 11.7182 13.078C11.7262 13.0803 11.7342 13.0812 11.7421 13.0831C11.8272 13.1032 11.9133 13.1156 11.9994 13.1156C11.9997 13.1156 12 13.1156 12 13.1156C12.0006 13.1156 12.001 13.1156 12.0013 13.1156C12.0873 13.1156 12.1734 13.1035 12.2585 13.0831C12.2665 13.0812 12.2744 13.0803 12.2824 13.078C12.3599 13.058 12.4354 13.0274 12.5094 12.9894C12.5234 12.9824 12.5374 12.9751 12.5511 12.9674C12.5642 12.9601 12.5779 12.9547 12.5906 12.9467L22.0881 6.83945V17.2151C22.0878 17.7771 21.6304 18.2345 21.0685 18.2345Z"
                                    fill="#FAFAFA"/>
                            </svg>
                            <input type="email"
                                   className="registration__input"
                                   placeholder="Email"
                                   value={form.email}
                                   onChange={(e) => setForm({...form, email: e.target.value})}
                                   onBlur={emailHandler}
                                   disabled={isLoading}
                                   required
                            />
                        </div>
                        {!validEmail && <p className="input_invalid">Incorrect email</p>}
                    </div>
                    <div className="registration__field">
                        <div className="registration__input-wrapper">
                            <svg className="registration__input-icon" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.72738 24H19.2728C19.8753 24 20.3637 23.5116 20.3637 22.9091V10.5455C20.3637 9.94298 19.8753 9.45455 19.2728 9.45455H18.1819V6.18182C18.1819 2.77316 15.4088 0 12.0001 0C8.59146 0 5.81829 2.77316 5.81829 6.18182V9.45455H4.72738C4.12491 9.45455 3.63647 9.94298 3.63647 10.5455V22.9091C3.63647 23.5116 4.12491 24 4.72738 24ZM18.1819 13C18.1819 14.5 18.1819 19.5 18.1819 19.5C18.1819 19.5 18.1819 18.9985 18.1819 20.4985C18.1819 21.9985 18.1819 22 17.0001 22C15.8183 22 11.5001 22 11.5001 22C11.5001 22 8.18195 22 7.00012 22C5.81829 22 5.81829 22.0262 5.81829 20.615C5.81829 19.2038 5.81829 17 5.81829 17C5.81829 17 5.81829 14.5 5.81829 13C5.81829 11.5 5.50012 11.5 7.00012 11.5C8.50012 11.5 9.50012 11.5 9.50012 11.5H12.0001H15.0001C15.0001 11.5 16.4143 11.5 17.0001 11.5C18.1819 11.5 18.1819 11.5 18.1819 13ZM8.00011 6.18182C8.00011 3.97622 9.79451 2.18182 12.0001 2.18182C14.2057 2.18182 16.0001 3.97622 16.0001 6.18182V9.45455H8.00011V6.18182Z"
                                    fill="#FAFAFA"/>
                            </svg>
                            <input type="password"
                                   className="registration__input"
                                   placeholder="Password"
                                   value={form.password}
                                   onChange={(e) => setForm({...form, password: e.target.value})}
                                   onBlur={passwordHandler}
                                   disabled={isLoading}
                                   required
                            />
                        </div>
                        {!validPassword && <p className="input_invalid">Password's length must be more than 7 symbols</p>}
                    </div>
                    <div className="registration__field">
                        <div className="registration__input-wrapper">
                            <svg className="registration__input-icon" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.72738 24H19.2728C19.8753 24 20.3637 23.5116 20.3637 22.9091V10.5455C20.3637 9.94298 19.8753 9.45455 19.2728 9.45455H18.1819V6.18182C18.1819 2.77316 15.4088 0 12.0001 0C8.59146 0 5.81829 2.77316 5.81829 6.18182V9.45455H4.72738C4.12491 9.45455 3.63647 9.94298 3.63647 10.5455V22.9091C3.63647 23.5116 4.12491 24 4.72738 24ZM18.1819 13C18.1819 14.5 18.1819 19.5 18.1819 19.5C18.1819 19.5 18.1819 18.9985 18.1819 20.4985C18.1819 21.9985 18.1819 22 17.0001 22C15.8183 22 11.5001 22 11.5001 22C11.5001 22 8.18195 22 7.00012 22C5.81829 22 5.81829 22.0262 5.81829 20.615C5.81829 19.2038 5.81829 17 5.81829 17C5.81829 17 5.81829 14.5 5.81829 13C5.81829 11.5 5.50012 11.5 7.00012 11.5C8.50012 11.5 9.50012 11.5 9.50012 11.5H12.0001H15.0001C15.0001 11.5 16.4143 11.5 17.0001 11.5C18.1819 11.5 18.1819 11.5 18.1819 13ZM8.00011 6.18182C8.00011 3.97622 9.79451 2.18182 12.0001 2.18182C14.2057 2.18182 16.0001 3.97622 16.0001 6.18182V9.45455H8.00011V6.18182Z"
                                    fill="#FAFAFA"/>
                            </svg>
                            <input type="password"
                                   className="registration__input"
                                   placeholder="Repeat password"
                                   value={form.repeatPassword}
                                   onChange={(e) => setForm({...form, repeatPassword: e.target.value})}
                                   onBlur={repeatPasswordHandler}
                                   disabled={isLoading}
                                   required
                            />
                        </div>
                        {!validRepeatPassword && <p className="input_invalid">Passwords don't match</p>}
                    </div>
                    <input type="submit"
                           className="registration__button button"
                           value="Sign Up"
                           disabled={isLoading}
                    />
                </form>)
            }
        </>
    );
}

export default Form;
