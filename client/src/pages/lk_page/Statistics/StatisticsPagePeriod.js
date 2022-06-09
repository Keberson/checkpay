import React from "react";
import PropTypes from "prop-types";

function StatisticsPagePeriod({ startPeriod, endPeriod, submitCallback }) {
    return (
        <form className="statistics-widget__period-wrapper">
            <div className="statistics-widget__period">
                <input type="date"
                       className="statistics-period__start statistics-period__interval link"
                       onChange={(e) => startPeriod(e.target.value)}
                />
                <input type="date"
                       className="statistics-period__start statistics-period__interval link"
                       onChange={(e) => endPeriod(e.target.value)}
                />
            </div>
            <button className="statistics-period__button button"
                    onClick={(e) => submitCallback(true)}>
                Change
            </button>
        </form>
    );
}

StatisticsPagePeriod.propTypes = {
    startPeriod: PropTypes.func.isRequired,
    endPeriod: PropTypes.func.isRequired,
    submitCallback: PropTypes.func.isRequired
}

export default StatisticsPagePeriod;
