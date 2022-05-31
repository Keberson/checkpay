import React from "react";
import PropTypes from "prop-types";
import Auth from "./Auth";

function Location({ position }) {
    return (
        <div className={position + "__location-wrapper location-wrapper"}>
            <a href="#" className={position + "__location location link"}>
                <p className="location__text">EN</p>
                <svg className="location__arrow" viewBox="0 0 24 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3L12 10L22 3" stroke="white"/>
                </svg>
            </a>
            <ul className="location__list-wrapper">
                <li className="location__item-wrapper">
                    <a href="#" className="location__item link">RU</a>
                </li>
            </ul>
        </div>
    );
}

Location.propTypes = {
    position: PropTypes.string.isRequired
}

export default Location;