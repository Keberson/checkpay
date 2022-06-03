import React from "react";
import PropTypes from "prop-types";
import './historyWidget.css'
import Title from "../../components/Title";
import HistoryWidgetRow from "./HistoryWidgetRow";

function HistoryWidget({ data }) {
    return (
        <div className="main__widget widget_history">
            <div className="history__titles-wrapper">
                <Title classes="history__title" value="Date" size={5} />
                <Title classes="history__title" value="Type" size={5} />
                <Title classes="history__title" value="Category" size={5} />
                <Title classes="history__title" value="Amount" size={5} />
                <Title classes="history__title" value="Comment" size={5} />
            </div>
            {data.map(((value, index) => {
                return <HistoryWidgetRow key={index} data={value} />
            }))}
        </div>
    );
}

HistoryWidget.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default HistoryWidget;
