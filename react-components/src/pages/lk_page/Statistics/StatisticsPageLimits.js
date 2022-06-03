import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";

function StatisticsPageLimits({ limit }) {
    return (
        <div className="statistics-widget__row statistics-row_limits">
            <Title classes="statistics-widget__title" value="Limits" size={2} />
            <div className="statistics-limits-wrapper">
                <p className="statistics-limits-text">{limit.name}</p>
                <p className="statistics-limits-number">{limit.amount}</p>
            </div>
        </div>
    );
}

StatisticsPageLimits.propTypes = {
    limit: PropTypes.object.isRequired
}

export default StatisticsPageLimits;
