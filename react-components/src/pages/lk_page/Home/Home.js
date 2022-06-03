import React from "react";
import './home.css'
import ProfileWidget from "./ProfileWidget";
import StatisticsWidget from "./StatisticsWidget";
import AddWidget from "../AddWidget";
import HistoryWidget from "../HistoryWidget";

function Home() {
    return (
        <div className="home__main-wrapper">
            <ProfileWidget userInfo={{
                name: 'Maksim',
                surname: 'Kuzov',
                country: 'Russia',
                nickname: 'Keberson',
                email: 'creedkiller.62@gmail.com'
            }}/>
            <StatisticsWidget firstGraph={{
                name: 'First graph',
                graph: {}
            }} secondGraph={{
                name: 'Second graph',
                graph: {}
            }}/>
            <AddWidget />
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

export default Home;
