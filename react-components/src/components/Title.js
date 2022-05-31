import React from "react";
import PropTypes from 'prop-types'

function Title({ classes, value, size }) {
    let title = <h3 className="title__text">{value}</h3>;

    if (size) {
        if (size === 1) {
            title = <h1 className="title__text">{value}</h1>
        } else if (size === 3) {
            title = <h3 className="title__text">{value}</h3>
        } else if (size === 5) {
            title = <h5 className="title__text">{value}</h5>
        }
    }

    return (
        <div className={classes}>
            {title}
        </div>
    );
}

Title.propTypes = {
    classes: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    size: PropTypes.number
}

export default Title;