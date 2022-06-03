import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";
import StatisticsPagePeriod from "./StatisticsPagePeriod";
import StatisticsPageAnalytics from "./StatisticsPageAnalytics";

function StatisticsPagePeriodRow({ setStartPeriod, setEndPeriod, setIsSubmit }) {
    return (
        <div className="statistics-widget__row statistics-row_period-graph">
            <div className="statistics-row__side">
                <div className="statistics-side__part statistics-part__period">
                    <Title classes="statistics-widget__title" value="Period" size={2} />
                    <StatisticsPagePeriod startPeriod={(newValue) => setStartPeriod(newValue)}
                                          endPeriod={(newValue) => setEndPeriod(newValue)}
                                          submitCallback={(newValue) => setIsSubmit(newValue)}
                    />
                </div>
                <div className="statistics-side__part statistics-part__analysis">
                    <Title classes="statistics-widget__title" value="Income and Expenses" size={2} />
                    <StatisticsPageAnalytics data={{
                        income: 80000,
                        expenses: 50000
                    }} />
                </div>
            </div>
            <div className="statistics-row__side statistics-side__graph">

            </div>
        </div>
    );
}

StatisticsPagePeriodRow.propTypes = {
    setStartPeriod: PropTypes.func.isRequired,
    setEndPeriod: PropTypes.func.isRequired,
    setIsSubmit: PropTypes.func.isRequired
}

export default StatisticsPagePeriodRow;
