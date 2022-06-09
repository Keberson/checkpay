import React from "react";
import PropTypes from "prop-types";

function HistoryWidgetRowDelete({ deleteRow }) {
    return (
        <button className="history__del-button button" onClick={deleteRow}>
            <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2.5L31.5 31M3 31L31.5 2.5" stroke="#FF7B7B" strokeWidth="6"/>
            </svg>
        </button>
    );
}

HistoryWidgetRowDelete.propTypes = {
    deleteRow: PropTypes.func.isRequired
}

export default HistoryWidgetRowDelete;
