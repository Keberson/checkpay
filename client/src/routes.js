import React from "react";
import PropTypes from "prop-types";
import {Routes, Route, Navigate} from "react-router-dom";
import LK from "./pages/lk_page/LK";
import Home from "./pages/lk_page/Home/Home";
import AddPage from "./pages/lk_page/Add/AddPage";
import StatisticsPage from "./pages/lk_page/Statistics/StatisticsPage";
import HistoryPage from "./pages/lk_page/History/HistoryPage";
import SettingsPage from "./pages/lk_page/Settings/SettingsPage";
import MainPage from "./pages/main-page/MainPage";
import Registration from "./pages/registration/Registration";
import Authorization from "./pages/authorization/Authorization";

function useRoutes(isAuthenticated) {
     if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/lk" exact element={<LK />}>
                    <Route index element={<Home />} />
                    <Route path="add" exact element={<AddPage />} />
                    <Route path="statistics" exact element={<StatisticsPage />} />
                    <Route path="history" element={<HistoryPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
                <Route path="*" element={<Navigate to="/lk" replace />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/reg" exact element={<Registration />} />
            <Route path="/auth" exact element={<Authorization />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

useRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

export default useRoutes;