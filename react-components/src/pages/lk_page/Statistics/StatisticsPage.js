import React, {useState} from "react";
import './statistics.css'
import StatisticsPageCategories from "./StatisticsPageCategories";
import StatisticsPagePeriodRow from "./StatisticsPagePeriodRow";
import StatisticsPageLimits from "./StatisticsPageLimits";

function StatisticsPage() {
    const [startPeriod, setStartPeriod] = useState('');
    const [endPeriod, setEndPeriod] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <div className="statistics__main-wrapper">
            <div className="statistics-main__widget statistics-widget_statistics">
                <StatisticsPagePeriodRow setStartPeriod={setStartPeriod}
                                         setEndPeriod={setEndPeriod}
                                         setIsSubmit={setIsSubmit} />
                <StatisticsPageCategories startPeriod={startPeriod}
                                          endPeriod={endPeriod}
                />

                <StatisticsPageLimits limit={{
                    name: 'Card XXXX',
                    amount: '100000'
                }} />
            </div>
        </div>
    );
}

export default StatisticsPage;
