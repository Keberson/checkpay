import React from "react";
import PropTypes from 'prop-types';

function Link({classes, link, children, onClickCallback, specialClasses}) {
    return (
        <div className={classes + "-wrapper" + " " + specialClasses}>
            <a href={link} className={classes + " link"} onClick={onClickCallback}>
                {children}
            </a>
        </div>
    );
}

Link.propTypes = {
    classes: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    specialClasses: PropTypes.string,
    onClickCallback: PropTypes.func
}

export default Link;
