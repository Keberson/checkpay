import React from "react";
import PropTypes from "prop-types";
import StatisticsPageAnalyticsRow from "./StatisticsPageAnalyticsRow";

function StatisticsPageAnalytics({income, expenses}) {
    return (
        <div className="statistics-analysis-wrapper">
            <StatisticsPageAnalyticsRow type="Income" value={income} />
            <StatisticsPageAnalyticsRow type="Expenses" value={expenses} />
        </div>
    );
}

StatisticsPageAnalytics.propTypes = {
    income: PropTypes.number.isRequired,
    expenses: PropTypes.number.isRequired
}

export default StatisticsPageAnalytics;
