import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";

function StatisticsPageAnalyticsRow({ type, value }) {
    return (
        <div className={"statistics-analysis__" + type.toLowerCase() + "-wrapper statistics-analysis__row"}>
            <Title classes="statistics-analysis__title" value={type} size={2} />
            <p className="statistics-analysis__text">{value}</p>
        </div>
    );
}

StatisticsPageAnalyticsRow.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired
}

export default StatisticsPageAnalyticsRow;
