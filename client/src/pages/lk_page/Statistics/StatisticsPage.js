import React, {useCallback, useContext, useEffect, useState} from "react";
import './statistics.css'
import StatisticsPageCategories from "./StatisticsPageCategories";
import StatisticsPagePeriodRow from "./StatisticsPagePeriodRow";
import StatisticsPageLimits from "./StatisticsPageLimits";
import {AuthContext} from "../../../context/auth.context";
import {useHTTP} from "../../../hooks/https.hook";
import {GraphContext} from "../../../context/graph.context";

const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function StatisticsPage() {
    const {token, userID} = useContext(AuthContext);
    const {request} = useHTTP();
    const [activeGraph, setActiveGraph] = useState('Current');
    const [dataToGraph, setDataToGraph] = useState({title: '', data: [], chartType: ''});
    const [history, setHistory] = useState({});
    const [period, setPeriod] = useState({
        start: '',
        end: ''
    });
    const [data, setData] = useState({
        income: 0,
        expenses: 0,
        planned: 0,
        limit: 0
    });
    const [expensesCategory, setExpensesCategory] = useState(0);
    const [activeCategory, setActiveCategory] = useState('Different');

    const analyzePeriodFull = () => {
        let sumIncome = 0;
        let sumExpenses = 0;
        let sumPlanned = 0;
        let sumLimit = 0;

        for (const historyKey in history) {
            const startDate = new Date(period.start);
            const endDate = new Date(period.end);
            const currentDate = new Date();
            let tempDate = new Date(Date.parse(history[historyKey].date));
            tempDate = new Date(tempDate.toISOString().slice(0, tempDate.toISOString().indexOf('T')));
            switch (history[historyKey].type) {
                case 'Income':
                    if (tempDate.getMonth() >= startDate.getMonth() && tempDate.getMonth() <= endDate.getMonth()) {
                        sumIncome += Number(history[historyKey].amount);
                    }
                    break;
                case 'Expenditure':
                    if (tempDate >= startDate && tempDate <= endDate) {
                        sumExpenses += Number(history[historyKey].amount);
                    }

                    if (tempDate.getMonth() === currentDate.getMonth()) {
                        sumLimit += Number(history[historyKey].amount);
                    }
                    break;
                case 'Planned':
                    if (tempDate.getMonth() === currentDate.getMonth()) {
                        sumPlanned += Number(history[historyKey].amount);
                    }
                    break;
                default:
                    break;
            }
        }

        setData({
            income: sumIncome,
            expenses: sumExpenses,
            planned: sumPlanned,
            limit: sumLimit
        });
    }
    const analyzePeriodCategory = () => {
        let sumExpenses = 0;

        for (const historyKey in history) {
            let tempDate = new Date(Date.parse(history[historyKey].date));
            tempDate = new Date(tempDate.toISOString().slice(0, tempDate.toISOString().indexOf('T')));
            if (tempDate >= new Date(period.start) && tempDate <= new Date(period.end)) {
                if (history[historyKey].category === activeCategory) {
                    if (history[historyKey].type === 'Expenditure') {
                        sumExpenses += Number(history[historyKey].amount);
                    }
                }
            }
        }

        setExpensesCategory(sumExpenses);
    }
    const analyzeDateToGraph = () => {
        switch (activeGraph) {
            case 'General':
                let monthsIncome = {};
                let monthsExpenses = {};

                for (const historyKey in history) {
                    let tempDate = new Date(Date.parse(history[historyKey].date));
                    tempDate = new Date(tempDate.toISOString().slice(0, tempDate.toISOString().indexOf('T')));
                    tempDate = tempDate.toDateString().split(' ');
                    tempDate = `${tempDate[1]} ${tempDate[3]}`;
                    if (history[historyKey].type === 'Expenditure') {
                        if (monthsExpenses[tempDate]) {
                            monthsExpenses[tempDate] += Number(history[historyKey].amount);
                        } else {
                            monthsExpenses[tempDate] = Number(history[historyKey].amount);
                        }

                    } else if (history[historyKey].type === 'Income') {
                        if (monthsIncome[tempDate]) {
                            monthsIncome[tempDate] += Number(history[historyKey].amount);
                        } else {
                            monthsIncome[tempDate] = Number(history[historyKey].amount);
                        }

                    }
                }

                const tempData = [];

                for (const monthsIncomeKey in monthsIncome) {
                    if (monthsExpenses[monthsIncomeKey]) {
                        tempData.push([monthsIncomeKey, monthsIncome[monthsIncomeKey], monthsExpenses[monthsIncomeKey]]);
                    } else {
                        tempData.push([monthsIncomeKey, monthsIncome[monthsIncomeKey], 0]);
                    }
                }

                for (const monthsExpensesKey in monthsExpenses) {
                    if (!tempData.find(item => item[0] === monthsExpensesKey)) {
                        tempData.push([monthsExpensesKey, 0, monthsExpenses[monthsExpensesKey],]);
                    }
                }

                tempData.sort((a, b) => new Date(a[0]) - new Date(b[0]));

                setDataToGraph({
                    title: 'Overview statistics',
                    data: [['Month Year', 'Income', 'Expenses'], ...tempData],
                    chartType: 'ColumnChart'
                });

                break;
            case 'Period':
                let expensesCategory = {
                    different: 0,
                    transport: 0,
                    food: 0,
                    clothes: 0,
                    entertainment: 0,
                    hcs: 0
                };

                for (const historyKey in history) {
                    let tempDate = new Date(Date.parse(history[historyKey].date));
                    tempDate = new Date(tempDate.toISOString().slice(0, tempDate.toISOString().indexOf('T')));
                    if (tempDate >= new Date(period.start) && tempDate <= new Date(period.end)) {
                        if (history[historyKey].type === 'Expenditure') {
                            switch (history[historyKey].category) {
                                case 'Different':
                                    expensesCategory.different += Number(history[historyKey].amount);
                                    break;
                                case 'Transport':
                                    expensesCategory.transport += Number(history[historyKey].amount);
                                    break;
                                case 'Food and Products':
                                    expensesCategory.food += Number(history[historyKey].amount);
                                    break;
                                case 'Clothes and Shoes':
                                    expensesCategory.clothes += Number(history[historyKey].amount);
                                    break;
                                case 'Entertainments':
                                    expensesCategory.entertainment += Number(history[historyKey].amount);
                                    break;
                                case 'HCS':
                                    expensesCategory.hcs += Number(history[historyKey].amount);
                                    break;
                            }
                        }
                    }
                }

                setDataToGraph({
                    title: 'Current period categories expenses',
                    data: [['Category', 'Expenses'],
                        ['Different', expensesCategory.different],
                        ['Transport', expensesCategory.transport],
                        ['Food and Products', expensesCategory.food],
                        ['Clothes and Shoes', expensesCategory.clothes],
                        ['Entertainments', expensesCategory.entertainment],
                        ['HCS', expensesCategory.hcs]
                    ],
                    chartType: 'ColumnChart'
                });
                break;
            case 'Current':
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
                    data: [['Date', 'Expenses'], ...data],
                    chartType: 'LineChart'
                });

                break;
            default:
                break;
        }
    }
    const getData = useCallback(async () => {
        const received = (await request(`/api/lk/stat/${userID}`, 'GET', null, {
            authorization: `Bearer ${token}`
        }));

        setHistory(received);

        if (!history) {
            return history;
        }

        let minDate = new Date();
        minDate.setDate(1);
        let maxDate = new Date();
        maxDate.setMonth(minDate.getMonth() + 1, 0);

        setPeriod({
            start: minDate.toISOString().slice(0, minDate.toISOString().indexOf('T')),
            end: maxDate.toISOString().slice(0, maxDate.toISOString().indexOf('T'))
        });
    }, [request, token, userID]);

    useEffect(() => {
        getData();
    }, [getData]);
    useEffect(() => {
        analyzePeriodFull();
    }, [period]);
    useEffect(() => {
        analyzePeriodCategory();
    }, [period, activeCategory]);
    useEffect(() => {
        analyzeDateToGraph();
    }, [period, activeGraph]);

    return (
        <div className="statistics__main-wrapper">
            <div className="statistics-main__widget statistics-widget_statistics">
                <GraphContext.Provider value={{activeGraph, setActiveGraph, dataToGraph}}>
                    <StatisticsPagePeriodRow period={period}
                                             setPeriod={setPeriod}
                                             data={data}/>
                </GraphContext.Provider>
                <StatisticsPageCategories activeCategory={activeCategory}
                                          setActiveCategory={setActiveCategory}
                                          expenses={expensesCategory}/>
                <StatisticsPageLimits amount={data.planned} isMoreLimit={data.planned === 0 ? false : data.planned < data.limit}/>
            </div>
        </div>
    );
}

export default StatisticsPage;
