import React from "react";
import PropTypes from "prop-types";

function Text({ classes, value }) {
    return (
        <div className={classes}>
            <p className={classes + "__text"}>{value}</p>
        </div>
    );
}

Text.propTypes = {
    classes: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Text;
