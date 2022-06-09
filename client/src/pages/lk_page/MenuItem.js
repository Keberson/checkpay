import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import {NavLink} from "react-router-dom";

function MenuItem({ classes, object }) {
    return (
        <li className={classes}>
            <NavLink to={object.title.toLowerCase()} className="nav__link nav__item link">
                {object.icon}
                <Title classes="item__title" value={object.title} size={3} />
            </NavLink>
        </li>
    );
}

MenuItem.propTypes = {
    classes: PropTypes.string,
    object: PropTypes.object.isRequired,
}

export default MenuItem;
