import React from "react";

function Location() {
    return (
        <div className="footer__location-wrapper">
            <ul className="footer__location">
                <li className="location__item">RU</li>
            </ul>
            <div className="footer__location-active">
                <div className="location-active__text">EN</div>
                <div className="location-active__arrow">
                    <svg viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2L11 9L21 2" stroke="#676767"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Location;
