import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Does from "./components/does/Does";
import Info from "./components/info/Info";
import Customers from "./components/customers/Customers";
import PersonalData from "./components/personalData/PersonalData";
import Data from "./components/data/Data";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Does/>
            <Info/>
            <Customers/>
            <PersonalData/>
            <Data/>
            <Faq/>
            <Footer/>
        </>
    );
}

export default App;
