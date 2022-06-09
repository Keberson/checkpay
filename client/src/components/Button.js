import React from "react";
import PropTypes from "prop-types";

function Button({ position, value }) {
    return (
        <button className={position + "__button button"}>{value}</button>
    );
}

Button.propTypes = {
    position: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Button;