import React, {useState} from "react";
import './home.css'
import ProfileWidget from "./ProfileWidget";
import StatisticsWidget from "./StatisticsWidget";
import AddWidget from "../AddWidget";
import HistoryWidget from "../HistoryWidget";

function Home() {
    const [isNeedRefresh, setIsNeedRefresh] = useState(false);

    return (
        <div className="home__main-wrapper">
            <ProfileWidget />
            <StatisticsWidget isNeedRefresh={isNeedRefresh}/>
            <AddWidget setIsNeedRefresh={setIsNeedRefresh}/>
            <HistoryWidget isNeedRefresh={isNeedRefresh} setIsNeedRefresh={setIsNeedRefresh} page="home" />
        </div>
    );
}

export default Home;
