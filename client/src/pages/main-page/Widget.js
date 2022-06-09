import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";

function Widget({ widgetObject }) {
    return (
        <div key={widgetObject.title} className="main-opportunities__widget">
            <div className="main-widget__image-wrapper">
                {widgetObject.svg}
            </div>
            <div className="main-widget__text-wrapper">
                <Title classes="main-widget__title" value={widgetObject.title} size={5} />
                <div className="main-widget__subtitle-wrapper">
                    <p className="main-widget__subtitle">{widgetObject.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

Widget.propTypes = {
    widgetObject: PropTypes.object.isRequired
}

export default Widget;
