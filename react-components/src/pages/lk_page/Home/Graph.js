import React from "react";
import PropTypes from "prop-types";

function StatisticsWidget({ graph }) {
    return (
        <div className="home-statistics__graph">

        </div>
    );
}

StatisticsWidget.propTypes = {
    graph: PropTypes.object.isRequired
}

export default StatisticsWidget;
