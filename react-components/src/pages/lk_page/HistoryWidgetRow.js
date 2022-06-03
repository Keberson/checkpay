import React from "react";
import PropTypes from "prop-types";
import HistoryWidgetRowText from "./HistoryWidgetRowText";

function HistoryWidgetRow({ data }) {
    return (
        <div className="history__row">
            <HistoryWidgetRowText info={data.date} />
            <HistoryWidgetRowText info={data.type} />
            <HistoryWidgetRowText info={data.category} />
            <HistoryWidgetRowText info={data.amount} />
            <HistoryWidgetRowText info={data.comment} />
        </div>
    );
}

HistoryWidgetRow.propTypes = {
    data: PropTypes.object.isRequired
}

export default HistoryWidgetRow;
