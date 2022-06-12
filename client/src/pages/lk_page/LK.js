import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import {MenuContext} from "../../context/menu.context";
import './lk.css';
import MenuBar from "./MenuBar";

function LK() {
    const [isChanges, setIsChanges] = useState(false)
    return (
        <div className="container">
            <MenuContext.Provider value={{isChanges, setIsChanges}}>
                <MenuBar />
                <Outlet />
                <div className="menu-wrapper menu-wrapper_space"/>
            </MenuContext.Provider>
        </div>
    );
}

export default LK;
