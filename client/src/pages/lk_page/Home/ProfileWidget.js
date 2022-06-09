import React, {useContext, useEffect,} from "react";
import ProfileWidgetRow from "./ProfileWidgetRow";
import {AuthContext} from "../../../context/auth.context";
import {useUserInfo} from "../../../hooks/userInfo.hook";
import {Spinner} from "react-spinner-animated";
import {useHTTP} from "../../../hooks/https.hook";

function ProfileWidget() {
    const {userID, token} = useContext(AuthContext);
    const {isLoading} = useHTTP();
    const {userInfo, getUserInfo} = useUserInfo(token, userID);

    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    return (
        <div className="home-main__widget home-widget_profile">
            {
                isLoading ?
                    <Spinner center={false} width="25%" height="25%"/> :
                    <>
                        <ProfileWidgetRow info={userInfo.name} type="Name"/>
                        <ProfileWidgetRow info={userInfo.surname} type="Surname"/>
                        <ProfileWidgetRow info={userInfo.country} type="Country"/>
                        <ProfileWidgetRow info={userInfo.username} type="Nickname"/>
                        <ProfileWidgetRow info={userInfo.email} type="Email"/>
                    </>
            }
        </div>
    );
}

export default ProfileWidget;
