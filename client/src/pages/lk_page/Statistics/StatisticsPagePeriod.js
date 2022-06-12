import React from "react";
import PropTypes from "prop-types";

function StatisticsPagePeriod({period, setPeriod}) {
    return (
        <form className="statistics-widget__period-wrapper">
            <div className="statistics-widget__period-row">
                <label className="statistics-widget__period-text">{period.start}</label>
                <input type="date"
                       className="statistics-period__start statistics-period__interval link"
                       value={period.start}
                       onChange={(e) => {
                           if ((new Date(e.target.value)) > (new Date(period.end))) {
                               setPeriod({start: e.target.value, end: e.target.value})
                           } else {
                               setPeriod({...period, start: e.target.value})
                           }
                       }}
                />
            </div>
            <div className="statistics-widget__period-row">
                <label className="statistics-widget__period-text">{period.end}</label>
                <input type="date"
                       className="statistics-period__start statistics-period__interval link"
                       value={period.end}
                       onChange={(e) => {
                           if ((new Date(e.target.value)) < (new Date(period.start))) {
                               setPeriod({start: e.target.value, end: e.target.value})
                           } else {
                               setPeriod({...period, end: e.target.value})
                           }
                       }}
                />
            </div>
        </form>
    );
}

StatisticsPagePeriod.propTypes = {
    period: PropTypes.object.isRequired,
    setPeriod: PropTypes.func.isRequired
}


export default StatisticsPagePeriod;
