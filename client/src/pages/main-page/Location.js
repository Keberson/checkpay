import React from "react";
import PropTypes from "prop-types";
import Link from "../../components/Link";

function Location({ position }) {
    return (
        <div className={position + "__location-wrapper main-location-wrapper"}>
            <Link classes={position + "__location main-location link"} link="#" >
                <p className="main-location__text">EN</p>
                <svg className="main-location__arrow" viewBox="0 0 24 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3L12 10L22 3" stroke="white"/>
                </svg>
            </Link>
            <ul className="main-location__list-wrapper">
                <li className="main-location__item-wrapper">
                    <Link classes="#" link="main-location__item link">
                        RU
                    </Link>
                </li>
            </ul>
        </div>
    );
}

Location.propTypes = {
    position: PropTypes.string.isRequired
}

export default Location;