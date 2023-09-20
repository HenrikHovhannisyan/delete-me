import React, {memo} from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Does from "../../components/does/Does";
import Customers from "../../components/customers/Customers";

const HowWeWork = () => {
    return (
        <>
            <NavBar/>
            <Does/>
            <Customers/>
            <Footer/>
        </>
    );
};

export default memo(HowWeWork);
