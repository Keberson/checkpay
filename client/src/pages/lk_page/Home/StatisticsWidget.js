import React, {useEffect, useCallback, useContext, useState} from "react";
import PropTypes from "prop-types";
import {Spinner} from "react-spinner-animated";
import {Chart} from "react-google-charts";
import {AuthContext} from "../../../context/auth.context";
import {useHTTP} from "../../../hooks/https.hook";

function StatisticsWidget({isNeedRefresh}) {
    const MONTHS = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const {token, userID} = useContext(AuthContext);
    const {request} = useHTTP();
    const [history, setHistory] = useState({});
    const [dataToGraph, setDataToGraph] = useState({
        title: '',
        data: [],
        chartType: ''
    });
    const [isNeedRedraw, setIsNeedRedraw] = useState(false);

    const analyzeDateToGraph = () => {
        let expenses = {};

        let beginMonth = new Date();
        beginMonth.setDate(1);
        beginMonth.setHours(0,0,0);
        let endMonth = new Date();
        endMonth.setMonth(beginMonth.getMonth() + 1, 0);
        endMonth.setHours(0,0,0);

        for (let i = 0; i <= endMonth.getDate() - beginMonth.getDate(); i++) {
            expenses[i + 1] = 0;
        }

        for (const historyKey in history) {
            let tempDate = new Date(Date.parse(history[historyKey].date));
            tempDate = new Date(tempDate.toISOString().slice(0, tempDate.toISOString().indexOf('T')));
            if (history[historyKey].type === 'Expenditure') {
                if (tempDate >= beginMonth && tempDate <= endMonth) {
                    expenses[tempDate.getDate()] += Number(history[historyKey].amount);
                }
            }
        }

        const data = [];
        for (const expensesKey in expenses) {
            data.push([expensesKey, expenses[expensesKey]]);
        }

        setDataToGraph({
            title: `Current month (${MONTHS[beginMonth.getMonth()]}) expenses`,
            data: [['Date', 'Income'], ...data],
            chartType: 'LineChart'
        });
        setIsNeedRedraw(false);
    };
    const getData = useCallback(async () => {
        const received = (await request(`/api/lk/stat/${userID}`, 'GET', null, {
            authorization: `Bearer ${token}`
        }));

        setHistory(received);
        setIsNeedRedraw(true)
    }, [request, token, userID]);

    useEffect(() => {
        getData();
    }, [getData, isNeedRefresh]);
    useEffect(() => {
        analyzeDateToGraph();
    }, [isNeedRefresh, isNeedRedraw]);

    return (
        <div className="home-main__widget home-widget_statistics">
            <div className="home-statistics__left-block home-statistics__block">
                <Chart chartType={dataToGraph.chartType}
                       className="home-statistics__graph"
                       data={dataToGraph.data}
                       loader={<Spinner center={false} width="25%" height="25%"/>}
                       options={
                           {
                               title: dataToGraph.title,
                               legend: {position: 'none'}
                           }}
                />
            </div>
        </div>
    );
}

StatisticsWidget.propTypes = {
    isNeedRefresh: PropTypes.bool.isRequired
};

export default StatisticsWidget;
