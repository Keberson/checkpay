import React from "react";
import PropTypes from "prop-types";
import HistoryWidgetRowText from "./HistoryWidgetRowText";
import HistoryWidgetRowDelete from "./HistoryWidgetRowDelete";

function HistoryWidgetRow({ data, deleteMethod }) {
    const date = (new Date(data.date_m + '.' + data.date_d + '.' + data.date_y)).toLocaleDateString();

    const deleteRow = (e) => {
        console.log(data);
        deleteMethod(data.id);
    }

    return (
        <div className="history__row">
            <HistoryWidgetRowText info={date} />
            <HistoryWidgetRowText info={data.type} />
            <HistoryWidgetRowText info={data.category} />
            <HistoryWidgetRowText info={data.amount} />
            <HistoryWidgetRowText info={data.comment || ''} />
            <HistoryWidgetRowDelete deleteRow={deleteRow} />
        </div>
    );
}

HistoryWidgetRow.propTypes = {
    data: PropTypes.object.isRequired,
    deleteMethod: PropTypes.func.isRequired
}

export default HistoryWidgetRow;
