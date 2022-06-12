import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";
import StatisticsPagePeriod from "./StatisticsPagePeriod";
import StatisticsPageAnalytics from "./StatisticsPageAnalytics";
import StatisticsPageGraph from "./StatisticsPageGraph";

function StatisticsPagePeriodRow({period, data, setPeriod}) {
    return (
        <div className="statistics-widget__row statistics-row_period-graph">
            <div className="statistics-row__side">
                <div className="statistics-side__part statistics-part__period">
                    <Title classes="statistics-widget__title" value="Period" size={2}/>
                    <StatisticsPagePeriod period={period} setPeriod={setPeriod}/>
                </div>
                <div className="statistics-side__part statistics-part__analysis">
                    <Title classes="statistics-widget__title" value="Income and Expenses" size={2}/>
                    <StatisticsPageAnalytics income={data.income} expenses={data.expenses}/>
                </div>
            </div>
            <StatisticsPageGraph />
        </div>
    );
}

StatisticsPagePeriodRow.propTypes = {
    period: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    setPeriod: PropTypes.func.isRequired
}

export default StatisticsPagePeriodRow;
