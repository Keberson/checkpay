import React, {useState} from "react";
import { Outlet } from "react-router-dom"
import './menu.css'
import MenuBar from "./MenuBar";

function LK() {
    return (
        <div className="container">
            <MenuBar />
            <Outlet />
            <div className="menu-wrapper menu-wrapper_space"/>
        </div>
    );
}

export default LK;
