import React from "react";
import Title from "../../components/Title";
import Auth from "./Auth";
import Location from "./Location";

function Header() {
    return (
        <div className="main-header">
            <Title value="Check Pay" classes="main-header__title" size={3} />
            <div className="main-header__right-side">
                <Auth position="main-header" />
                <Location position="main-header" />
            </div>
        </div>
    );
}

export default Header;