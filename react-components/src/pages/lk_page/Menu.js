import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

function Menu({ list }) {
    return (
        <div className="menu__nav-wrapper">
            <ul className="menu__nav">
                { list.map((value) => {
                    return <MenuItem key={value.title} classes={"nav__item-wrapper " + value.specialClass}
                                  object={value} />
                }) }
            </ul>
        </div>
    );
}

Menu.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu;
