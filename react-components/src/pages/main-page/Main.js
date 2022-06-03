import React from "react";
import Header from "./Header";
import Button from "../../components/Button";
import Title from "../../components/Title";
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="main-main">
            <div className="main-container">
                <Header />
                <div className="main-main-content">
                    <div className="main-main__text-wrapper">
                        <Title classes="main-main__title" value="Check Pay is your personal expense control assistant" size={1} />
                        <Title classes="main-main__subtitle" value="Start monitoring your expenses today. History, statistics,
                            analytics in one place." size={3} />
                        <Link to='/reg' className="link">
                            <Button position="main-main" value="Join Us" />
                        </Link>
                    </div>
                    <div className="main-main__image-wrapper">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;