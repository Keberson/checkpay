import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";

function HistoryWidgetRowText({ info }) {
    return (
        <div className="history__text-wrapper history__date-text">
            <Title classes="history__text" value={info} size={5} />
        </div>
    );
}

HistoryWidgetRowText.propTypes = {
    info: PropTypes.any
}

export default HistoryWidgetRowText;
