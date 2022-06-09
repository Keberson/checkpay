import React from "react";

function Location() {
    return (
        <div className="forgotPas-footer__location-wrapper">
            <ul className="forgotPas-footer__location">
                <li className="forgotPas-location__item">RU</li>
            </ul>
            <div className="forgotPas-footer__location-active">
                <div className="forgotPas-location-active__text">EN</div>
                <div className="forgotPas-location-active__arrow">
                    <svg viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2L11 9L21 2" stroke="#676767"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Location;
