import React, {useState} from "react";
import {useHTTP} from "../../hooks/https.hook";
import {toast} from "react-toastify";
import {Spinner} from "react-spinner-animated";

function Form() {
    const {request, isLoading} = useHTTP();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const checkCorrect = (value) => {
        return Boolean(value.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ));
    }
    const emailHandler = (e) => {
        setValidEmail(checkCorrect(e.target.value));
    }

    const submitForm = async (e) => {
        e.preventDefault();
        if (validEmail) {
            try {
                const data = await request('/api/auth/forgot-pas', 'POST', {email});
                toast.success(data.message);
            } catch (error) {
                toast.error(error.message, {
                    closeOnClick: false
                });
            }
        }
    };

    return (
        <>
            {isLoading ?
                (<Spinner center={false} text="Loading..."/>) :
                (<form className="forgotPas__form" onSubmit={submitForm}>
                    <div className="forgotPas__inputs">
                        <div className="forgotPas__field">
                            <div className="forgotPas__input-wrapper">
                                <svg className="forgotPas__input-icon" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.0685 3.85339H2.93155C1.31516 3.85339 0 5.16856 0 6.78494V17.2151C0 18.8315 1.31516 20.1466 2.93155 20.1466H21.0685C22.6848 20.1466 24 18.8315 24 17.2151V6.78526C24.0003 5.16856 22.6852 3.85339 21.0685 3.85339ZM19.636 5.7659L12 10.6855L4.36401 5.7659H19.636ZM21.0685 18.2345H2.93155C2.36959 18.2345 1.9125 17.7771 1.9125 17.2154V6.83945L11.41 12.9467C11.4227 12.9547 11.4364 12.9601 11.4495 12.9674C11.4632 12.9751 11.4772 12.9824 11.4913 12.9894C11.5649 13.0274 11.6408 13.058 11.7182 13.078C11.7262 13.0803 11.7342 13.0812 11.7421 13.0831C11.8272 13.1032 11.9133 13.1156 11.9994 13.1156C11.9997 13.1156 12 13.1156 12 13.1156C12.0006 13.1156 12.001 13.1156 12.0013 13.1156C12.0873 13.1156 12.1734 13.1035 12.2585 13.0831C12.2665 13.0812 12.2744 13.0803 12.2824 13.078C12.3599 13.058 12.4354 13.0274 12.5094 12.9894C12.5234 12.9824 12.5374 12.9751 12.5511 12.9674C12.5642 12.9601 12.5779 12.9547 12.5906 12.9467L22.0881 6.83945V17.2151C22.0878 17.7771 21.6304 18.2345 21.0685 18.2345Z"
                                        fill="#FAFAFA"/>
                                </svg>
                                <input type="email"
                                       className="forgotPas__input"
                                       placeholder="Email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       onBlur={emailHandler}
                                       required
                                       disabled={isLoading}
                                />
                            </div>
                            {!validEmail && <p className="input_invalid">Incorrect email</p>}
                        </div>
                    </div>
                    <input type="submit"
                           className="forgotPas__button button"
                           value="Recover"
                    />
                </form>)
            }
        </>
    );
}

export default Form;
