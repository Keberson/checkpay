import React from "react";
import './style.css'
import Main from "./Main";
import Opportunities from "./Opportunities";
import Feedback from "./Feedback";
import Footer from "./Footer";

function MainPage() {
    return (
        <div className="main-page">
            <Main />
            <Opportunities />
            <Feedback />
            <Footer />
        </div>
    );
}

export default MainPage;
