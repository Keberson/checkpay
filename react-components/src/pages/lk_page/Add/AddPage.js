import React from "react";
import './add.css'
import HistoryWidget from "../HistoryWidget";
import AddWidget from "../AddWidget";
import CalculatorWidget from "./CalculatorWidget";

function AddPage() {
    return (
        <div className="main-wrapper">
            <div className="main__side">
                <AddWidget />
            </div>
            <CalculatorWidget />
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

export default AddPage;
