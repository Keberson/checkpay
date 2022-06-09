import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../../context/auth.context";
import {useUserInfo} from "../../../hooks/userInfo.hook";
import {useHTTP} from "../../../hooks/https.hook";
import {toast} from "react-toastify";
import {Spinner} from "react-spinner-animated";

function SettingsPageForm() {
    const {request, isLoading} = useHTTP();
    const {token, userID} = useContext(AuthContext);
    const {getUserInfo, userInfo, setUserInfo} = useUserInfo(token, userID);

    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    const submitChanges = async (e) => {
        e.preventDefault();
        const data = [];
        const keys = [];
        for (const userInfoKey in userInfo) {
            if ((userInfo[userInfoKey]) !== "No data available" && userInfo[userInfoKey]) {
                if (userInfoKey === "password" && userInfo[userInfoKey].length >= 7) {
                    keys.push(userInfoKey);
                    data.push(userInfo[userInfoKey]);
                } else if (userInfoKey !== "password") {
                    keys.push(userInfoKey);
                    data.push(userInfo[userInfoKey]);
                }
            }
        }

        const sendData = {};
        for (let i = 0; i < keys.length; i++) {
            sendData[keys[i]] = data[i];
        }

        console.log({...sendData})

        try {
            const data = await request(`/api/lk/setting/${userID}`, 'PUT', {...sendData}, {
                authorization: `Bearer ${token}`
            });
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            {
                isLoading ?
                    <Spinner center={false} width="25%" height="25%"/> :
                    <form className="settings-edit__inputs-wrapper" onSubmit={submitChanges}>
                        <div className="settings-edit__input-wrapper">
                            <label htmlFor="name">Name: </label>
                            <input type="text"
                                   name="name"
                                   className="settings-edit__input"
                                   value={userInfo.name}
                                   onClick={(e) => {
                                       if (userInfo.name === "No data available") {
                                           e.target.value = '';
                                       }
                                   }}
                                   onBlur={(e) => {
                                       if (!e.target.value.match(/^[a-zA-Z]+$/) || e.target.value.length < 3) {
                                           e.target.value = userInfo.name = "No data available";
                                       }
                                   }}
                                   onChange={(e) => {
                                       if (e.target.value.match(/[a-z]/i)) {
                                           setUserInfo({...userInfo, name: e.target.value})
                                       }
                                   }}
                            />
                        </div>
                        <div className="settings-edit__input-wrapper">
                            <label htmlFor="surname">Surname: </label>
                            <input type="text"
                                   name="surname"
                                   className="settings-edit__input"
                                   value={userInfo.surname}
                                   onChange={(e) => setUserInfo({...userInfo, surname: e.target.value})}
                                   onClick={(e) => {
                                       if (userInfo.surname === "No data available") {
                                           e.target.value = '';
                                       }
                                   }}
                                   onBlur={(e) => {
                                       if (!e.target.value.match(/^[a-zA-Z]+$/) || e.target.value.length < 3) {
                                           e.target.value = userInfo.surname = "No data available";
                                       }
                                   }}
                            />
                        </div>
                        <div className="settings-edit__input-wrapper">
                            <label htmlFor="country">Country: </label>
                            <input type="text"
                                   name="country"
                                   className="settings-edit__input"
                                   value={userInfo.country}
                                   onChange={(e) => setUserInfo({...userInfo, country: e.target.value})}
                                   onClick={(e) => {
                                       if (userInfo.country === "No data available") {
                                           e.target.value = '';
                                       }
                                   }}
                                   onBlur={(e) => {
                                       if (!e.target.value.match(/^[a-zA-Z]+$/) || e.target.value.length < 3) {
                                           e.target.value = userInfo.country = "No data available";
                                       }
                                   }}
                            />
                        </div>
                        <div className="settings-edit__input-wrapper">
                            <label htmlFor="nickname">Nickname: </label>
                            <input type="text"
                                   name="nickname"
                                   className="settings-edit__input"
                                   value={userInfo.username}
                                   onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                                   onClick={(e) => {
                                       if (userInfo.username === "No data available") {
                                           e.target.value = '';
                                       }
                                   }}
                                   onBlur={(e) => {
                                       if (!e.target.value || e.target.value.length < 3) {
                                           e.target.value = userInfo.username = "No data available";
                                       }
                                   }}
                            />
                        </div>
                        <div className="settings-edit__input-wrapper">
                            <label htmlFor="email">Email: </label>
                            <input type="text"
                                   name="email"
                                   className="settings-edit__input"
                                   value={userInfo.email}
                                   onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                                   onClick={(e) => {
                                       if (userInfo.email === "No data available") {
                                           e.target.value = '';
                                       }
                                   }}
                                   onBlur={(e) => {
                                       if (!e.target.value.toLowerCase().match(
                                           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                       )) {
                                           e.target.value = userInfo.email = "No data available";
                                       }
                                   }}
                            />
                        </div>
                        <div className="settings-edit__input-wrapper">
                            <label htmlFor="password">Password: </label>
                            <input type="password"
                                   name="password"
                                   className="settings-edit__input"
                                   value={userInfo.password}
                                   onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                            />
                        </div>
                        <div className="settings-edit__button-wrapper">
                            <input type="submit" className="settings-edit__button button" value="Save"/>
                        </div>
                    </form>
            }
        </>
    );
}

export default SettingsPageForm;
