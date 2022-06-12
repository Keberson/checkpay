import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";

function StatisticsPageLimits({ amount, isMoreLimit }) {
    return (
        <div className="statistics-widget__row statistics-row_limits">
            <Title classes="statistics-widget__title" value="Limits" size={2} />
            <div className="statistics-limits-wrapper">
                <p className="statistics-limits-text">Planned on current month: </p>
                <p className="statistics-limits-number">{amount}</p>
            </div>
            {isMoreLimit && <p className="statistics-limits__warning">You have exceeded the limit for this month</p>}
        </div>
    );
}

StatisticsPageLimits.propTypes = {
    amount: PropTypes.number.isRequired,
    isMoreLimit: PropTypes.bool.isRequired
}

export default StatisticsPageLimits;
