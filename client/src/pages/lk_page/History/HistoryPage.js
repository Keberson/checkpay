import React from "react";
import './history.css'
import Title from "../../../components/Title";
import HistoryWidget from "../HistoryWidget";

function HistoryPage() {
    return (
        <div className="history__main-wrapper">
            <Title classes="history-widget__title" value="History" size={1} />
            <HistoryWidget isNeedRefresh={false}  setIsNeedRefresh={() => {}}/>
        </div>
    );
}

export default HistoryPage;
