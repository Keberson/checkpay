import React from "react";
import Header from "./Header";
import Button from "../../components/Button";
import Title from "../../components/Title";

function Main() {
    return (
        <div className="main">
            <div className="container">
                <Header />
                <div className="main-content">
                    <div className="main__text-wrapper">
                        <Title classes="main__title" value="Check Pay is your personal expense control assistant" size={1} />
                        <Title classes="main__subtitle" value="Start monitoring your expenses today. History, statistics,
                            analytics in one place." size={3} />
                        <Button position="main" value="Join Us" />
                    </div>
                    <div className="main__image-wrapper">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;