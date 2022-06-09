import React from "react";
import './history.css'
import Title from "../../../components/Title";
import HistoryWidget from "../HistoryWidget";

function HistoryPage() {
    return (
        <div className="history__main-wrapper">
            <Title classes="history-widget__title" value="History" size={1} />
            <HistoryWidget data={[{
                date: '01.01.2022',
                type: 'Income',
                category: 'Salary',
                amount: 1000,
                comment: 'No comments'
            }, {
                date: '01.01.2022',
                type: 'Expenditure',
                category: 'Entertainment',
                amount: 1000,
                comment: 'No comments'
            }]} />
        </div>
    );
}

export default HistoryPage;
