import React, {memo} from "react";
import Styles from "./pricimg.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import PersonalData from "../../components/personalData/PersonalData";
import Customers from "../../components/customers/Customers";
import Footer from "../../components/footer/Footer";

const Pricing = () => {
    return (
        <>
            <PageHeader _class={Styles.banner_text} title={'SAVE MORE WITH OUR BEST VALUE AND'}
                        text={'MOST POPULAR LOGO NAME PLANS'}/>
            <Customers/>
            <PersonalData d_none={Styles.d_none} order={Styles.order}/>
            <Footer/>
        </>
    );
};

export default memo(Pricing);
