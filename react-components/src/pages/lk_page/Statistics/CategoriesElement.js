import React from "react";
import PropTypes from "prop-types";

function StatisticsPageCategories({ category, onClickCallback }) {
    const classes = "statistics-categories__element" + (category.isActive ? " active-category" : "");

    return (
        <li className={classes}>
            <button className="statistics-categories__button button"
                    onClick={(e) => onClickCallback(category.name)}
            >
                {category.name}
            </button>
        </li>
    );
}

StatisticsPageCategories.propTypes = {
    category: PropTypes.object.isRequired,
    onClickCallback: PropTypes.func.isRequired
}

export default StatisticsPageCategories;
