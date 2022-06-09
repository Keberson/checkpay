import React from "react";
import PropTypes from "prop-types";
import StatisticsPageAnalyticsRow from "./StatisticsPageAnalyticsRow";

function StatisticsPageAnalytics({ data }) {
    return (
        <div className="statistics-analysis-wrapper">
            <StatisticsPageAnalyticsRow type="Income" value={data.income} />
            <StatisticsPageAnalyticsRow type="Expenses" value={data.expenses} />
        </div>
    );
}

StatisticsPageAnalytics.propTypes = {
    data: PropTypes.object.isRequired
}

export default StatisticsPageAnalytics;
