import React, {useContext, useEffect} from "react";
import Title from "../../components/Title";

import png from './sources/avatar.png'
import {useUserInfo} from "../../hooks/userInfo.hook";
import {AuthContext} from "../../context/auth.context";
import {MenuContext} from "../../context/menu.context";

function MenuUser() {
    const {isChanges, setIsChanges} = useContext(MenuContext);
    const {token, userID} = useContext(AuthContext);
    const {getUserInfo, userInfo} = useUserInfo(token, userID);

    useEffect(() => {
        getUserInfo();
        setIsChanges(false);
    }, [getUserInfo, isChanges]);

    return (
        <div className="menu__user-profile">
            <img src={png} alt="menu__user-icon" className="menu__user-icon"/>
            <Title classes="menu__user-nickname" value={userInfo.username} size={2} />
        </div>
    );
}

export default MenuUser;
