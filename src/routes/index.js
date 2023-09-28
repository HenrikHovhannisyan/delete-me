import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import HowWeWork from "../pages/howWeWork/HowWeWork";
import Pricing from "../pages/pricing/Pricing";
import AboutUs from "../pages/aboutUs/AboutUs";

const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/how-we-work'} element={<HowWeWork/>}/>
                <Route path={'/pricing-list'} element={<Pricing/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteList;
