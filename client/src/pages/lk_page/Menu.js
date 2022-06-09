import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import Title from "../../components/Title";
import {useAuth} from "../../hooks/auth.hook";

function Menu({ list }) {
    const {logout} = useAuth();

    return (
        <div className="menu__nav-wrapper">
            <ul className="menu__nav">
                { list.map((value) => {
                    return <MenuItem key={value.title} classes={"nav__item-wrapper " + value.specialClass}
                                  object={value} />
                }) }
                <li className="nav__item-wrapper">
                    <div onClick={logout} className="nav__link nav__item link">
                        <svg className="item__icon" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 13.5V11H6V9H13V6.5L16.5 10L13 13.5ZM11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11.5V1.5H1.5V18.5H11.5V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H11Z" />
                        </svg>
                        <Title classes="item__title" value="Exit" size={3} />
                    </div>
                </li>
            </ul>
        </div>
    );
}

Menu.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu;
