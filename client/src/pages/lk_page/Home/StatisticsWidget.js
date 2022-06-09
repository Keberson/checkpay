import React from "react";
import Title from "../../../components/Title";
import Graph from "./Graph";

function StatisticsWidget() {
    const firstGraph={
        name: 'First graph',
        graph: {}
    };

    const secondGraph={
        name: 'Second graph',
        graph: {}
    };

    return (
        <div className="home-main__widget home-widget_statistics">
            <div className="home-statistics__left-block home-statistics__block">
                <Graph graph={firstGraph.graph}/>
                <Title classes="home-statistics__title" value={firstGraph.name} size={5} />
            </div>
            <div className="home-statistics__right-block home-statistics__block">
                <Graph graph={secondGraph.graph}/>
                <Title classes="home-statistics__title" value={secondGraph.name} size={5} />
            </div>
        </div>
    );
}

export default StatisticsWidget;
