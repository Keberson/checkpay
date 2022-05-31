import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";

function Widget({ widgetObject }) {
    return (
        <div key={widgetObject.title} className="opportunities__widget">
            <div className="widget__image-wrapper">
                {widgetObject.svg}
            </div>
            <div className="widget__text-wrapper">
                <Title classes="widget__title" value={widgetObject.title} size={5} />
                <div className="widget__subtitle-wrapper">
                    <p className="widget__subtitle">{widgetObject.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

Widget.propTypes = {
    widgetObject: PropTypes.object.isRequired
}

export default Widget;
