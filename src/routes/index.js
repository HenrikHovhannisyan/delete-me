import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import HowWeWork from "../pages/howWeWork/HowWeWork";

const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/how-we-work'} element={<HowWeWork/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteList;
