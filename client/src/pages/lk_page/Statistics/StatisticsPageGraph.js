import React, {useContext} from "react";
import {Chart} from "react-google-charts";
import {GraphContext} from "../../../context/graph.context";
import {Spinner} from "react-spinner-animated";

function StatisticsPageGraph() {
    const {activeGraph, setActiveGraph, dataToGraph} = useContext(GraphContext);
    const graphList = ['General', 'Period', 'Current'];
    let currentIndex = graphList.indexOf(activeGraph);

    const changeGraph = (e) => {
        let tempIndex = currentIndex + Number(e.target.value);
        tempIndex = (tempIndex === graphList.length) ? 0 : (tempIndex < 0) ? graphList.length - 1 : tempIndex;
        setActiveGraph(graphList[tempIndex]);
    };

    return (
        <div className="statistics-row__side statistics-side__graph">
            <Chart chartType={dataToGraph.chartType}
                   className="statistics__graph"
                   data={dataToGraph.data}
                   loader={<Spinner center={false} width="25%" height="25%"/>}
                   options={
                       {
                           title: dataToGraph.title,
                           legend: {position: 'none'}
                       }}
            />
            <div className="statistics-graph__buttons">
                <button className="statistics-graph__button button"
                        onClick={changeGraph}
                        value={-1}
                >
                    Prev
                </button>
                <button className="statistics-graph__button button"
                        onClick={changeGraph}
                        value={1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default StatisticsPageGraph;
