import React from "react";
import PropTypes from 'prop-types'

function Title({ classes, value, size }) {
    let title;

    switch (size) {
        case 1:
            title = <h1 className="title__text">{value}</h1>
            break;
        case 2:
            title = <h2 className="title__text">{value}</h2>
            break;
        case 3:
        default:
            title = <h3 className="title__text">{value}</h3>
            break;
        case 4:
            title = <h4 className="title__text">{value}</h4>
            break;
        case 5:
            title = <h5 className="title__text">{value}</h5>
            break;
    }

    return (
        <div className={classes}>
            {title}
        </div>
    );
}

Title.propTypes = {
    classes: PropTypes.string.isRequired,
    value: PropTypes.any,
    size: PropTypes.number
}

export default Title;