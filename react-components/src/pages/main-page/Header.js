import React from "react";
import Title from "../../components/Title";
import Auth from "./Auth";
import Location from "./Location";

function Header() {
    return (
        <div className="header">
            <Title value="Check Pay" classes="header__title" size={3} />
            <div className="header__right-side">
                <Auth position="header" />
                <Location position="header" />
            </div>
        </div>
    );
}

export default Header;