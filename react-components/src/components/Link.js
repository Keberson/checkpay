import React from "react";
import PropTypes from 'prop-types';

function Link({classes, link, value}) {
    return (
        <div className={classes + "-wrapper"}>
            <a href={link} className={classes}>{value}</a>
        </div>
    );
}

Link.propTypes = {
    classes: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired
}

export default Link;
