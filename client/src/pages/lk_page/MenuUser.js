import React from "react";
import Title from "../../components/Title";

import png from './sources/avatar.png'

function MenuUser() {
    return (
        <div className="menu__user-profile">
            <img src={png} alt="menu__user-icon" className="menu__user-icon"/>
            <Title classes="menu__user-nickname" value="Keberson" size={2} />
        </div>
    );
}

export default MenuUser;
