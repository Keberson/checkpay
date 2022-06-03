import React from "react";
import Title from "../../../components/Title";

function CalculatorWidget() {
    // TODO(keberson): сделать калькулятор рабочим
    const digitsPanel = [{
        char: '1',
        callback: () => {}
    }, {
        char: '2',
        callback: () => {}
    }, {
        char: '3',
        callback: () => {}
    }, {
        char: '4',
        callback: () => {}
    }, {
        char: '5',
        callback: () => {}
    }, {
        char: '6',
        callback: () => {}
    }, {
        char: '7',
        callback: () => {}
    }, {
        char: '8',
        callback: () => {}
    }, {
        char: '9',
        callback: () => {}
    }, {
        char: 'C',
        callback: () => {}
    }, {
        char: '0',
        callback: () => {}
    }, {
        char: '<',
        callback: () => {}
    },]

    return (
        <div className="main__widget widget_calculator">
            <Title classes="calculator__title" value="Calculator" size={2} />
            <div className="calculator__input-wrapper">
                <textarea className="calculator__input" name="calculator" id="calc"/>
            </div>
            <div className="calculator__buttons-wrapper">
                <div className="calculator__numbers-wrapper">
                    {digitsPanel.map((value) => {
                        return <button key={value.char} className="calculator__button button">{value.char}</button>
                    })}
                </div>
                <div className="calculator__signs-wrapper">
                    <button className="calculator__button button button_plus">+</button>
                    <button className="calculator__button button button_minus">-</button>
                    <button className="calculator__button button button_divisions">/</button>
                    <button className="calculator__button button button_multiplication">×</button>
                    <button className="calculator__button button button_equally">=</button>
                </div>
            </div>
        </div>
    );
}

export default CalculatorWidget;
